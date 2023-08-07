export const Promise = (promise, res) => {
  promise
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Server Error");
    });
}

export const PromiseInsertion = async (promise, res) => {
  try {
    const result = await promise;
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


export const PromiseDelete = async (promise, res) => {
  try {
    const result = await promise;
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'ID not found in ma_table' });
    }
    return res.status(200).json({ message: "DELETE SUCCESSFULL" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Une erreur s'est produite lors de la suppression" });
  }
}

