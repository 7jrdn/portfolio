function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function loadProject(projectId) {
    const projectDetails = {
        aninvitationtodearmother: {
            title: "an invitation to dear möther",
            music: "Music Creds: G​ü​aard",
            description1: "A collaborative cinematic project created using Call of Duty 4: Modern Warfare's replay mode featuring hand-drawn elements. Made for entertainment within a niche Twitter and YouTube community.",
            image1: "wip/stained-glass-timelapse.gif",
            description2: "All illustrative elements drawn by me in Procreate",
            videoUrl: "https://www.youtube.com/embed/0iRg2-fEGHQ?autoplay=1",
            aspectRatio: "4 / 3",
            icons: ["iw3xo", "aftereffects", "procreate"],
        },

        olsen: {
            title: "OLSEN",
            music: "Music Creds: Boards of Canada",
            description1: "First 3D project for my second-year Motion Graphics class. Created a short story set in a post-apocalyptic world using Blender and After Effects.",
            image1: "wip/olsen-models.gif",
            description2: "All elements were modeled and animated by me",
            videoUrl: "https://www.youtube.com/embed/gXPpJeUsbKQ?autoplay=1",
            aspectRatio: "16 / 9",
            icons: ["blender", "aftereffects"],
        },

        sunsetDigital: {
            title: "22-10-10_20-47.00",
            music: "Music Creds: jd (rip)",
            description1: "This piece of work is incredibly important to me. It came to life during a challenging period in my life. In many ways, it became both an outlet as well as a turning point. It was a space where I was able to process my emotions through visual storytelling.",
            image1: "",
            description2: "Recorded with a Panasonic PV-DV202D",
            videoUrl: "https://www.youtube.com/embed/GpBBh9hQobc?autoplay=1&loop=1",
            aspectRatio: "3 / 2",
            icons: ["aftereffects"],
        },
        
        deersect: {
            title: "DEER SECT",
            music: "Music Creds: Dylann Angercar",
            description1: "Second-year Motion Graphics project evoking my experiences with nature with a touch of fantasy. I focused on improving painterly techniques and experimenting with drawing musculature.",
            image1: "wip/deer-timelapse.gif",
            description2: "All assets were drawn/painted using Procreate then afterwards imported into After Effects for animation.",
            videoUrl: "https://www.youtube.com/embed/YN7Rq_okluM?autoplay=1",
            aspectRatio: "4 / 3",
            icons: ["procreate", "aftereffects"],
        },

        configuredbackground: {
            title: "Configured™ Website Background",
            music: "Music Creds: heroine",
            description1: "Animated website background for Configured. A study of natural tree movement using hand-drawn assets in Procreate and animation in After Effects.",
            image1: "wip/configured-bg.gif",
            description2: "",
            videoUrl: "https://www.youtube.com/embed/KLNiul-KypQ?autoplay=1&loop=1&playlist=KLNiul-KypQ",
            aspectRatio: "16 / 9",
            icons: ["procreate", "aftereffects"],
        },

        fjc: {
            title: "fj/c 02 side b",
            music: "Music Creds: hatse",
            description1: "Personal project created using Call of Duty 4: Modern Warfare’s replay mode and Radiant, a custom environment tool. Built the environment from scratch and created a short cinematic video in After Effects to practice cinematography and color correction.",
            image1: "",
            description2: "",
            videoUrl: "https://www.youtube.com/embed/cVobOxiVtEM?autoplay=1",
            aspectRatio: "16 / 9",
            icons: ["radiant", "iw3xo", "aftereffects"],
        },

        configuredlogo: {
            title: "Configured™ Animated Logo",
            music: "",
            description1: "Intro animation for art collective Configured. Illustrated in Procreate and animated in After Effects, featuring their voodoo doll logo dropping from a tree branch.",
            image1: "",
            description2: "",
            videoUrl: "https://www.youtube.com/embed/lc-FCTcPuN0?autoplay=1&loop=1&playlist=lc-FCTcPuN0",
            aspectRatio: "16 / 9",
            icons: ["procreate", "aftereffects"],
        },

        idontwannabealoser: {
            title: "idontwannabealoser",
            music: "Music Creds: Los3r",
            description1: "Personal Call of Duty 4: Modern Warfare cinematic edit using the game’s replay mode, with a focus on effects, composition, and music syncing.",
            image1: "",
            description2: "",
            videoUrl: "https://www.youtube.com/embed/whhsQAhRc2o?autoplay=1",
            aspectRatio: "16 / 9",
            icons: ["iw3xo", "aftereffects"],
        },

        xxclusivetapes: {
            title: "XXCLUSIVE tapes001 (Teaser Video)",
            music: "Music Creds: sagesarpa",
            description1: "Teaser video for the XXclusive art collective, promoting a mix featuring edits and music from various members. I illustrated the logo in Procreate and afterwards animated as well as added elements in After Effects.",
            image1: "wip/xxclusive-teaser.gif",
            description2: "",
            videoUrl: "https://www.youtube.com/embed/V-rTlsoriOY?autoplay=1&loop=1&playlist=V-rTlsoriOY",
            aspectRatio: "16 / 9",
            icons: ["procreate", "aftereffects"],
        },

    };

    const iconMapping = {
        aftereffects: "icons/after-effects.svg",
        photoshop: "icons/photoshop.svg",
        procreate: "icons/procreate.svg",
        blender: "icons/blender.svg",
        radiant: "icons/radiant.svg",
        iw3xo: "icons/iw3xo.svg",
    };

    const details = projectDetails[projectId];

    if (details) {
        let iconHtml = '';
        details.icons.forEach(iconName => {
            const iconUrl = iconMapping[iconName];
            if (iconUrl) {
                iconHtml += `<img src="${iconUrl}" alt="${iconName}" style="width: 50px; height: 50px; margin-right: 10px;" />`;
            }
        });

        let imageHtml = '';
        if (details.image1) {
            imageHtml = `<img src="${details.image1}" alt="${details.title}">`;
        }

        document.getElementById('project-details').innerHTML = `
            <div class="project-video">
                <h1 class="project-name">${details.title}</h1>
                <small>${details.music}</small>
                <iframe src="${details.videoUrl};controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="aspect-ratio:${details.aspectRatio}"></iframe>
            </div>
            <div class="description-wrapper">
                <div class="description-columns">
                     ${imageHtml}
                    <div class="description-info">
                        <div class="descriptions">
                            <p>${details.description1}</p>
                            <p>${details.description2}</p>
                        </div>
                        <div class="programs">
                            <small>Used Programs:</small>
                            <div>${iconHtml}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else {
        document.getElementById('project-details').innerHTML = "<p>Project not found.</p>";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const projectId = getQueryParam('project');
    if (projectId) {
        loadProject(projectId);
    } else {
        document.getElementById('project-details').innerHTML = "<p>No project selected.</p>";
    }
});
