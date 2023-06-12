import { db } from "../config/database.js";

export function getTotalValueImages() {
  const result = db.query(`
    SELECT
      COUNT(*)
    FROM
      images
    ;
  `);

  return result;
}

export function getImageUrlById(id) {
  const result = db.query(
    `
    SELECT
      *
    FROM
      images
    WHERE
      id = $1
    ;
  `,
    [id]
  );

  return result;
}
