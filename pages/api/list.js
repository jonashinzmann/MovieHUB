if (request.method === "POST") {
    try {
      const listData = request.body;
      await Joke.create(listData);
  
      response.status(201).json({ status: "List created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }