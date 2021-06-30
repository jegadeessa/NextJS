// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const dataAPI = "http://demo9739512.mockable.io/vaccine";

export default async function fetchPortFolioData(req, res) {
  if (req.method == "GET") {
    const res = await fetch("http://demo9739512.mockable.io/vaccine");
    const portfolio = await res.json();
    return portfolio;
  }
}
