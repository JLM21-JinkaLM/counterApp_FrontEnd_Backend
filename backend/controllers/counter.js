const Counter = require("../models/CounterApp");

exports.getValue = async (req, res) => {
  try {
    let counter = await Counter.findOne();
    if (!counter) counter = await Counter.create({});
    res.status(200).json({
      data:counter,
      message: "retrieve the value",
    });
  } catch (error) {
    res.status(500).json({
      message: "error occured by retrieving the data",
    });
  }
};

exports.incrementValue = async (req, res) => {
  try {
    const data = await Counter.findOneAndUpdate(
      {},
      { $inc: { value: 1 } },
      { new: true, upsert: true },
    );
    res.status(200).json({
      data,
      message: "incremented by 1",
    });
  } catch (error) {
    res.status(500).json({
      message: "error occured by incrementing",
    });
  }
};

exports.decrementValue = async (req, res) => {
  try {
    const data = await Counter.findOneAndUpdate(
      {},
      { $inc: { value: -1 } },
      { new: true, upsert: true },
    );
    res.status(200).json({
      data,
      message: "decrement Value by 1",
    });
  } catch (error) {
    res.status(500).json({
      message: "error occured by decrement Value",
    });
  }
};

exports.resetValue = async (req, res) => {
  try {
    const data = await Counter.findOneAndUpdate(
      {},
      { value: 0 },
      { new: true, upsert: true },
    );
    res.status(200).json({
      data,
      message: "reset by 0",
    });
  } catch (error) {
    res.status(500).json({
      message: "error occured by reseting value",
    });
  }
};
