import { firebaseDatabase } from "./config";

export const save = async (path, user) => {
  const query = await firebaseDatabase
    .collection(path)
    .add(user);

  const newUser = await query
    .get()
    .then((snapshot) => ({
      ...(snapshot.data()),
      id: snapshot.id,
    }))
    .then((data) => data);

  return newUser;
};

export const getByKey = async (path, key = "", value = "") => {
  const list = [];
  const query = await firebaseDatabase
    .collection(path)
    .where(`${key}`, "==", `${value}`)
    .get();

  query.forEach((snapshot) => list.push({
    ...(snapshot.data()),
    id: snapshot.id,
  }));

  return list[0];
};

export const update = async (path, id, newData) => {
  await firebaseDatabase
    .collection(path)
    .doc(id)
    .update(newData);

  return newData;
};

export const fetch = async (path) => {
  const list = [];

  const query = await firebaseDatabase
    .collection(path)
    .get();

  query.forEach((snapshot) => list.push({
    ...(snapshot.data()),
    id: snapshot.id,
  }));

  return list;
};
