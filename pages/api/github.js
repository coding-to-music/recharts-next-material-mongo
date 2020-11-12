export default async (_, res) => {
    const userResponse = await fetch("https://api.github.com/user", {
      headers: {
        "Accept": "application/vnd.github.v3+json",
        "Authorization": `token ${process.env.GITHUB_PERSONAL_TOKEN}`,
      },
    });
  
    const user = await userResponse.json();
  
    return res.status(200).json({
      user,
    });
  };
  