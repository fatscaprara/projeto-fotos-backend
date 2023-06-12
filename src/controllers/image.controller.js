import {
  getImageUrlById,
  getTotalValueImages,
} from "../repositories/image.repository.js";

export async function getImages(req, res) {
  try {
    const totalImages = await getTotalValueImages();
    const randomImageId =
      Math.floor(Math.random() * (totalImages.rows[0].count - 1 + 1)) + 1;
    const image = await getImageUrlById(randomImageId);

    res.send(image.rows[0]);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
