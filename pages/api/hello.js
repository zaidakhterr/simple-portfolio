export default function handler(req, res) {
  res.status(200).json({
    message: "Hi, Zaid here! Welcome to my corner of the internet.",
    links: {
      email: "zaidakhter1202@gmail.com",
      github: "https://github.com/zaidakhterr",
      linkedin: "https://www.linkedin.com/in/zaidakhterr/",
      twitter: "https://twitter.com/zaidakhterr",
      upwork: "https://www.upwork.com/freelancers/~01c3f1d9695773d1f0",
      feedback: "https://forms.gle/pVdALKuhwjLskJLx8",
    },
  });
}
