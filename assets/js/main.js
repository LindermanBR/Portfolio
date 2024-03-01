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
    const skillElement = document.createElement("li");
    skillElement.innerHTML = `<img src="${skill.logo}" alt="${skill.alt}" title="${skill.alt}">`;
    hardSkills.appendChild(skillElement);
  });
}

function updateLanguages(profileData) {
  const languages = document.getElementById("profile-languages");

  profileData.languages.map((language) => {
    const languageElement = document.createElement("li");
    languageElement.innerText = language;
    languages.appendChild(languageElement);
  });
}

function updatePortfolio(profileData) {
  const portfolio = document.getElementById("profile-portfolio");

  profileData.portfolio.map((project) => {
    const liElement = document.createElement("li");
    const titleElement = document.createElement("h3");
    const linkElement = document.createElement("a");

    titleElement.innerText = project.name;
    titleElement.classList.add("title");
    project.github ? titleElement.classList.add("github") : null;

    linkElement.innerText = "Link Repositório";
    linkElement.href = project.url;
    linkElement.target = "_blank";
    liElement.appendChild(titleElement);
    liElement.appendChild(linkElement);
    portfolio.appendChild(liElement);
    console.log(project);
  });
}

function updateExperience(profileData) {
  const experience = document.getElementById("profile-experience");

  profileData.professionalExperience.map((job) => {
    const liElement = document.createElement("li");
    const titleElement = document.createElement("h3");
    const periodElement = document.createElement("p");
    const descriptionElement = document.createElement("p");

    titleElement.innerText = job.name;
    periodElement.innerText = job.period;
    periodElement.classList.add("period");
    descriptionElement.innerText = job.description;
    liElement.appendChild(titleElement);
    liElement.appendChild(periodElement);
    liElement.appendChild(descriptionElement);
    experience.appendChild(liElement);
    console.log(job);
  });
}

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
  updateLanguages(profileData);
  updatePortfolio(profileData);
  updateExperience(profileData);
})();
