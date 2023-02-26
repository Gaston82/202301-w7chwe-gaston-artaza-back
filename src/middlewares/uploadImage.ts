import multer from "multer";
import { v4 as uuidv4 } from "uuid";

const storage = multer.diskStorage({
  destination: "uploads/",
  filename(req, file, callback) {
    const fileIdentifier = uuidv4();
    callback(null, `${fileIdentifier}-${file.originalname}`);
  },
});

const upload = multer({ storage });

export default upload;
