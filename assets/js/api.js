async function fetchProfileData() {
  const url =
    "https://raw.githubusercontent.com/LindermanBR/Portfolio/main/data/profile.json?token=GHSAT0AAAAAACH3ZOXG5SP4L7NIWECPGVXEZPBMCDA";
  const fetching = await fetch(url);

  return await fetching.json();
}
