import { firebaseDatabase } from './config';

export const save = async (path, body) => {
  const query = await firebaseDatabase
    .collection(path)
    .add(body);

  const newData = await query
    .get()
    .then((snapshot) => ({
      ...(snapshot.data()),
      id: snapshot.id,
    }))
    .then((data) => data);

  return newData;
};

export const getByKey = async (path, key = '', value = '') => {
  const list = [];
  const query = await firebaseDatabase
    .collection(path)
    .where(`${key}`, '==', `${value}`)
    .get();

  query.forEach((snapshot) => list.navigation({
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

  query.forEach((snapshot) => list.navigation({
    ...(snapshot.data()),
    id: snapshot.id,
  }));

  return list;
};
