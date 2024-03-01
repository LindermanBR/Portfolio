function updateProfileInfo(profileData) {
  const photo = document.getElementById("profile-photo");
  photo.src = profileData.photo;
  photo.alt = profileData.name;

  const name = document.getElementById("profile-name");
  name.innerText = "Olá eu sou o " + profileData.name;

  const job = document.getElementById("profile-job");
  job.innerText = profileData.job;

  const location = document.getElementById("profile-location");
  location.innerText = profileData.location;

  const phone = document.getElementById("profile-phone");
  phone.innerText = profileData.phone;
  phone.href = `tel:${profileData.phone}`;

  const mail = document.getElementById("profile-mail");
  mail.innerText = profileData.email;
  mail.href = `mailto:${profileData.email}`;
}

function updateSoftSkills(profileData) {
  const softSkills = document.getElementById("profile-soft-skills");

  profileData.skills.softSkills.map((skill) => {
    const skillElement = document.createElement("li");
    skillElement.innerText = skill;
    softSkills.appendChild(skillElement);
  });
}

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById("profile-hard-skills");

  profileData.skills.hardSkills.map((skill) => {
    console.log(skill.logo);
    const skillElement = document.createElement("li");
    skillElement.innerHTML = `<img src="${skill.logo}" alt="${skill.alt}" title="${skill.alt}">`;
    hardSkills.appendChild(skillElement);
  });
}

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
  console.log(profileData);
})();
