const pgs = [
    {
        name: "Saanvi PG for Ladies",
        location: "Brookefield",
        gender: "girls",
        rent: 10000,
        advance: 20000,
        room: "double",
        image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
        amenities: ["Food", "Wi-Fi", "CCTV"]
    },

    {
        name: "Sri Sai PG for Gents",
        location: "HSR Layout",
        gender: "boys",
        rent: 8000,
        advance: 16000,
        room: "triple",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
        amenities: ["Food", "Wi-Fi", "Power Backup"]
    },

    {
        name: "ANR Luxury Men's PG",
        location: "Electronic City",
        gender: "boys",
        rent: 9000,
        advance: 18000,
        room: "double",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
        amenities: ["AC", "Food", "Laundry"]
    },

    {
        name: "Universe Luxury PG",
        location: "Koramangala",
        gender: "girls",
        rent: 12000,
        advance: 25000,
        room: "single",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
        amenities: ["AC", "Wi-Fi", "CCTV"]
    },

    {
        name: "Green View PG",
        location: "Marathahalli",
        gender: "boys",
        rent: 7500,
        advance: 15000,
        room: "triple",
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
        amenities: ["Food", "Wi-Fi", "Parking"]
    },

    {
        name: "Comfort Stay PG",
        location: "Whitefield",
        gender: "girls",
        rent: 11000,
        advance: 22000,
        room: "double",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
        amenities: ["Food", "AC", "Laundry"]
    }
];


// ===============================
// DISPLAY PGs
// ===============================

function displayPGs(list) {

    const container = document.getElementById("pgContainer");

    container.innerHTML = "";

    if (list.length === 0) {

        container.innerHTML = `
            <div style="
                text-align:center;
                padding:40px;
                width:100%;
            ">
                <h2>No PGs found 😔</h2>
                <p>Try another location.</p>
            </div>
        `;

        return;
    }

    list.forEach(pg => {

        const card = document.createElement("div");

        card.className = "pg-card";

        card.innerHTML = `
            <img 
                src="${pg.image}" 
                alt="${pg.name}"
            >

            <div class="pg-content">

                <h2>${pg.name}</h2>

                <p>📍 ${pg.location}</p>

                <h3>
                    ₹${pg.rent.toLocaleString("en-IN")} / month
                </h3>

                <p>
                    💰 Advance: 
                    ₹${pg.advance.toLocaleString("en-IN")}
                </p>

                <p>
                    🛏 ${formatRoom(pg.room)}
                </p>

                <div class="amenities">
                    ${pg.amenities
                        .map(item => `<span>${item}</span>`)
                        .join("")}
                </div>

                <button onclick="viewDetails('${pg.name}')">
                    View Details
                </button>

            </div>
        `;

        container.appendChild(card);
    });
}


// ===============================
// ROOM FORMAT
// ===============================

function formatRoom(room) {

    if (room === "single") {
        return "Single Sharing";
    }

    if (room === "double") {
        return "Double Sharing";
    }

    if (room === "triple") {
        return "Triple Sharing";
    }

    return room;
}


// ===============================
// SEARCH PGs
// ===============================

function searchPGs() {

    const searchBox = document.getElementById("locationSearch");

    const searchText = searchBox.value
        .trim()
        .toLowerCase();

    // If search box is empty, show all PGs
    if (searchText === "") {
        displayPGs(pgs);
        return;
    }

    const results = pgs.filter(pg =>

        pg.location
            .toLowerCase()
            .includes(searchText)

        ||

        pg.name
            .toLowerCase()
            .includes(searchText)

    );

    displayPGs(results);
}


// ===============================
// VIEW DETAILS
// ===============================

function viewDetails(name) {

    const pg = pgs.find(pg => pg.name === name);

    if (!pg) {
        return;
    }

    alert(
        "🏠 " + pg.name +
        "\n\n" +

        "📍 Location: " + pg.location +
        "\n" +

        "💰 Rent: ₹" + pg.rent.toLocaleString("en-IN") +
        " / month" +
        "\n" +

        "💵 Advance: ₹" + pg.advance.toLocaleString("en-IN") +
        "\n" +

        "🛏 Room: " + formatRoom(pg.room) +
        "\n" +

        "✨ Amenities: " + pg.amenities.join(", ")
    );
}


// ===============================
// SHOW ALL PGs WHEN PAGE LOADS
// ===============================

displayPGs(pgs);
