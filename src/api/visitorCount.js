const fs = require("fs");
const path = require("path");

const filePath = path.resolve("visitorCount.json");

// Ensure the file exists
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify({ count: 0 }));
}

module.exports = async (req, res) => {
  try {
    // Read the current count
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const newCount = data.count + 1;

    // Update the count
    fs.writeFileSync(filePath, JSON.stringify({ count: newCount }));

    res.status(200).json({ count: newCount });
  } catch (error) {
    res.status(500).json({ error: "Error updating visitor count" });
  }
};
