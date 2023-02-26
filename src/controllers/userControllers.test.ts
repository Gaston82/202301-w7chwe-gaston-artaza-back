import request from "supertest";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { app } from "../server/index.js";
import connectDataBase from "../database/connectDataBase";
import User from "../database/models/user/User";
import { UserStructure } from "./types.js";

let server: MongoMemoryServer;

beforeAll(async () => {
  server = await MongoMemoryServer.create();
  await connectDataBase(server.getUri());
});

afterAll(async () => {
  await server.stop();
  await mongoose.connection.close();
});

afterEach(async () => {
  await User.deleteMany();
});

const registerUserEndPoint = "/users/register";

const mockUser: UserStructure = {
  username: "Peter",
  email: "peter@gmail.com",
  foes: [],
  friends: [],
  image: "peter.jpg",
  password: "lsjuy768996gfs",
};

describe("Given a POST users/register endpoint", () => {
  describe("When it recieves a request with the username 'Peter', email 'peter@gmail.com' and an image 'peter.jpg'", () => {
    test("Then it should respond with a status code 201 and the message 'The user Peter was succesfully created' ", async () => {
      const expectedMessage = `The user ${mockUser.username} was succesfully created`;

      const response = await request(app)
        .post(registerUserEndPoint)
        .send(mockUser);
      expect(response.body).toHaveProperty("message", expectedMessage);
    });
  });
});
