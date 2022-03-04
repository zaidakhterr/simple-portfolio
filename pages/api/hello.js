export default function handler(req, res) {
  res
    .status(200)
    .json({
      message: "Hi, Zaid here! Welcome to my conrner of the internet.",
      links: [],
    });
}
