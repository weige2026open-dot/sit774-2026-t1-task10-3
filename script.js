// =====================================
// HOME PAGE GREETING
// =====================================

// Find the greeting element
const greeting = document.getElementById("greeting");


// Only run this code if the greeting
// element exists on the current page
if (greeting) {

    // Get the current hour
    const currentHour = new Date().getHours();


    // Display a greeting based on the time
    if (currentHour < 12) {

        greeting.textContent =
            "Good morning! Welcome to Coastal Haven Hotel.";

    } else if (currentHour < 18) {

        greeting.textContent =
            "Good afternoon! Welcome to Coastal Haven Hotel.";

    } else {

        greeting.textContent =
            "Good evening! Welcome to Coastal Haven Hotel.";

    }

}



// =====================================
// CONTACT FORM VALIDATION
// =====================================


// Find the enquiry form
const enquiryForm =
    document.getElementById("enquiryForm");


// Only run validation code if the form exists
if (enquiryForm) {


    enquiryForm.addEventListener(
        "submit",
        function (event) {


            // Prevent form submission until
            // JavaScript validation is complete
            event.preventDefault();


            // Assume form is valid at first
            let isValid = true;



            // =====================================
            // GET FORM VALUES
            // =====================================


            const name =
                document
                    .getElementById("name")
                    .value
                    .trim();


            const email =
                document
                    .getElementById("email")
                    .value
                    .trim();


            const phone =
                document
                    .getElementById("phone")
                    .value
                    .trim();


            const subject =
                document
                    .getElementById("subject")
                    .value
                    .trim();


            const query =
                document
                    .getElementById("query")
                    .value
                    .trim();



            // =====================================
            // GET ERROR MESSAGE ELEMENTS
            // =====================================


            const nameError =
                document.getElementById("nameError");


            const emailError =
                document.getElementById("emailError");


            const phoneError =
                document.getElementById("phoneError");


            const subjectError =
                document.getElementById("subjectError");


            const queryError =
                document.getElementById("queryError");


            const formMessage =
                document.getElementById("formMessage");



            // =====================================
            // CLEAR OLD ERROR MESSAGES
            // =====================================


            nameError.textContent = "";

            emailError.textContent = "";

            phoneError.textContent = "";

            subjectError.textContent = "";

            queryError.textContent = "";

            formMessage.textContent = "";



            // =====================================
            // NAME VALIDATION
            // =====================================


            if (name === "") {

                nameError.textContent =
                    "Please enter your name.";

                isValid = false;

            }



            // =====================================
            // EMAIL VALIDATION
            // =====================================


            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (email === "") {

                emailError.textContent =
                    "Please enter your email address.";

                isValid = false;

            }

            else if (!emailPattern.test(email)) {

                emailError.textContent =
                    "Please enter a valid email address.";

                isValid = false;

            }



            // =====================================
            // PHONE VALIDATION
            // =====================================


            const phonePattern =
                /^\d+$/;


            if (phone === "") {

                phoneError.textContent =
                    "Please enter your phone number.";

                isValid = false;

            }

            else if (!phonePattern.test(phone)) {

                phoneError.textContent =
                    "Phone number must contain digits only.";

                isValid = false;

            }

            else if (phone.length > 10) {

                phoneError.textContent =
                    "Phone number must not exceed 10 digits.";

                isValid = false;

            }



            // =====================================
            // SUBJECT VALIDATION
            // =====================================


            if (subject === "") {

                subjectError.textContent =
                    "Please enter an enquiry subject.";

                isValid = false;

            }



            // =====================================
            // QUERY VALIDATION
            // =====================================


            if (query === "") {

                queryError.textContent =
                    "Please enter your enquiry.";

                isValid = false;

            }

            else if (query.length < 10) {

                queryError.textContent =
                    "Your enquiry must contain at least 10 characters.";

                isValid = false;

            }



            // =====================================
            // FINAL RESULT
            // =====================================


            if (isValid) {

                formMessage.textContent =
                    "Thank you. Your enquiry has been validated successfully.";

                formMessage.className =
                    "mt-3 fw-bold text-success";

            }

            else {

                formMessage.textContent =
                    "Please correct the errors above before submitting.";

                formMessage.className =
                    "mt-3 fw-bold text-danger";

            }


        }

    );

}

// =====================================
// SMART INTERACTIVE ROOM FINDER
// Task 10.3HD feature implementation
// =====================================

// The room data used by the recommendation feature.
// Keeping the data in structured objects makes it easy
// to compare each room with the user's preferences.
const hotelRooms = [
    {
        id: "standard",
        name: "Standard Room",
        price: 199,
        capacity: 2,
        purposes: ["business", "holiday"],
        features: ["queen bed"],
        accessible: false,
        image: "images/room1.jpg",
        imageAlt: "Standard room at Coastal Haven Hotel",
        modalId: "standardModal",
        description: "A comfortable room suitable for individual travellers and couples."
    },
    {
        id: "deluxe",
        name: "Deluxe Ocean Room",
        price: 229,
        capacity: 2,
        purposes: ["holiday", "romantic"],
        features: ["ocean view", "queen bed"],
        accessible: true,
        image: "images/room2.jpg",
        imageAlt: "Deluxe ocean view room",
        modalId: "deluxeModal",
        description: "Enjoy extra comfort and relaxing coastal views."
    },
    {
        id: "family",
        name: "Family Room",
        price: 299,
        capacity: 4,
        purposes: ["holiday", "family"],
        features: ["larger room", "multiple beds"],
        accessible: true,
        image: "images/room3.jpg",
        imageAlt: "Family room at Coastal Haven Hotel",
        modalId: "familyModal",
        description: "A spacious room designed for families and small groups."
    }
];


// Find the Room Finder interface.
const roomFinderForm =
    document.getElementById("roomFinderForm");


// Only run this code on the Rooms page.
if (roomFinderForm) {

    const startRoomFinder =
        document.getElementById("startRoomFinder");

    const roomFinderSection =
        document.getElementById("roomFinderSection");

    const roomResultSection =
        document.getElementById("roomResultSection");

    const guestCount =
        document.getElementById("guestCount");

    const roomBudget =
        document.getElementById("roomBudget");

    const stayPurpose =
        document.getElementById("stayPurpose");

    const preferredFeature =
        document.getElementById("preferredFeature");

    const accessibilityRequirement =
        document.getElementById("accessibilityRequirement");

    const roomFinderError =
        document.getElementById("roomFinderError");

    const voicePreferences =
        document.getElementById("voicePreferences");

    const voiceStatus =
        document.getElementById("voiceStatus");

    const recommendedRoomName =
        document.getElementById("recommendedRoomName");

    const recommendedRoomScore =
        document.getElementById("recommendedRoomScore");

    const recommendedRoomPrice =
        document.getElementById("recommendedRoomPrice");

    const recommendedRoomDescription =
        document.getElementById("recommendedRoomDescription");

    const recommendedRoomImage =
        document.getElementById("recommendedRoomImage");

    const recommendationReasons =
        document.getElementById("recommendationReasons");

    const recommendationNote =
        document.getElementById("recommendationNote");

    const viewRecommendedRoom =
        document.getElementById("viewRecommendedRoom");

    const tryAgainButton =
        document.getElementById("tryAgainButton");


    // Store the most recent recommendation so that the
    // View Room Details button can open the correct modal.
    let currentRecommendation = null;


    // =====================================
    // OPEN THE ROOM FINDER
    // =====================================

    startRoomFinder.addEventListener(
        "click",
        function () {

            roomFinderSection.hidden = false;

            startRoomFinder.setAttribute(
                "aria-expanded",
                "true"
            );

            roomFinderSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            // Move keyboard focus to the first form control.
            guestCount.focus();
        }
    );


    // =====================================
    // READ AND VALIDATE PREFERENCES
    // =====================================

    function getPreferences() {

        const preferences = {
            guests: Number(guestCount.value),
            budget: Number(roomBudget.value),
            purpose: stayPurpose.value,
            feature: preferredFeature.value,
            accessibility:
                accessibilityRequirement.value === "required"
        };

        return preferences;
    }


    function validatePreferences(preferences) {

        roomFinderError.textContent = "";

        if (
            !Number.isInteger(preferences.guests) ||
            preferences.guests < 1 ||
            preferences.guests > 4
        ) {
            roomFinderError.textContent =
                "Please select between 1 and 4 guests.";

            guestCount.focus();
            return false;
        }

        if (
            !Number.isFinite(preferences.budget) ||
            preferences.budget < 100 ||
            preferences.budget > 1000
        ) {
            roomFinderError.textContent =
                "Please enter a budget between $100 and $1000 per night.";

            roomBudget.focus();
            return false;
        }

        return true;
    }


    // =====================================
    // CALCULATE A MATCH SCORE
    // =====================================

    function calculateRoomMatch(room, preferences) {

        let score = 0;
        const reasons = [];
        const cautions = [];

        // Capacity is worth 25 points.
        if (room.capacity >= preferences.guests) {
            score += 25;
            reasons.push(
                "Suitable for " + preferences.guests +
                (preferences.guests === 1 ? " guest." : " guests.")
            );
        }

        // Budget is worth 25 points.
        if (room.price <= preferences.budget) {
            score += 25;
            reasons.push(
                "Within your $" + preferences.budget +
                " per night budget."
            );
        }
        else {
            cautions.push(
                "The room price is above your selected budget."
            );
        }

        // Purpose of stay is worth 20 points.
        if (room.purposes.includes(preferences.purpose)) {
            score += 20;
            reasons.push(
                "Matches your " +
                formatPurpose(preferences.purpose) +
                " stay."
            );
        }

        // Preferred feature is worth 20 points.
        if (preferences.feature === "none") {
            score += 20;
            reasons.push(
                "No specific room feature was required."
            );
        }
        else if (room.features.includes(preferences.feature)) {
            score += 20;
            reasons.push(
                "Includes your preferred feature: " +
                formatFeature(preferences.feature) + "."
            );
        }

        // Accessibility is worth 10 points.
        if (!preferences.accessibility) {
            score += 10;
        }
        else if (room.accessible) {
            score += 10;
            reasons.push(
                "Meets your selected accessibility requirement."
            );
        }

        return {
            room: room,
            score: score,
            reasons: reasons,
            cautions: cautions
        };
    }


    // =====================================
    // FIND THE STRONGEST RECOMMENDATION
    // =====================================

    function findBestRoom(preferences) {

        // Capacity and required accessibility are treated as
        // essential requirements rather than optional points.
        const eligibleRooms = hotelRooms.filter(
            function (room) {

                const hasCapacity =
                    room.capacity >= preferences.guests;

                const meetsAccessibility =
                    !preferences.accessibility || room.accessible;

                return hasCapacity && meetsAccessibility;
            }
        );

        if (eligibleRooms.length === 0) {
            return null;
        }

        const scoredRooms = eligibleRooms.map(
            function (room) {
                return calculateRoomMatch(room, preferences);
            }
        );

        // Highest score comes first. If two rooms have the
        // same score, recommend the lower-priced option.
        scoredRooms.sort(
            function (a, b) {

                if (b.score !== a.score) {
                    return b.score - a.score;
                }

                return a.room.price - b.room.price;
            }
        );

        return scoredRooms[0];
    }


    // =====================================
    // DISPLAY THE RECOMMENDATION
    // =====================================

    function displayRecommendation(result) {

        currentRecommendation = result.room;

        recommendedRoomName.textContent =
            result.room.name;

        recommendedRoomScore.textContent =
            result.score + "% Match";

        recommendedRoomPrice.textContent =
            "$" + result.room.price + " / night";

        recommendedRoomDescription.textContent =
            result.room.description;

        recommendedRoomImage.src =
            result.room.image;

        recommendedRoomImage.alt =
            result.room.imageAlt;

        recommendationReasons.innerHTML = "";

        result.reasons.forEach(
            function (reason) {

                const listItem =
                    document.createElement("li");

                listItem.textContent = reason;

                recommendationReasons.appendChild(listItem);
            }
        );

        if (result.cautions.length > 0) {
            recommendationNote.hidden = false;
            recommendationNote.textContent =
                "Please note: " + result.cautions.join(" ");
        }
        else {
            recommendationNote.hidden = true;
            recommendationNote.textContent = "";
        }

        roomResultSection.hidden = false;

        roomResultSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        // The heading can receive focus so that keyboard and
        // assistive-technology users notice the updated result.
        const resultHeading =
            document.getElementById("roomResultTitle");

        resultHeading.setAttribute("tabindex", "-1");
        resultHeading.focus();
    }


    // =====================================
    // FORM SUBMISSION
    // =====================================

    roomFinderForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const preferences =
                getPreferences();

            if (!validatePreferences(preferences)) {
                return;
            }

            const bestMatch =
                findBestRoom(preferences);

            if (!bestMatch) {
                roomResultSection.hidden = true;

                roomFinderError.textContent =
                    "No room currently meets the selected guest and accessibility requirements. Please adjust your preferences and try again.";

                return;
            }

            displayRecommendation(bestMatch);
        }
    );


    // =====================================
    // VIEW THE RECOMMENDED ROOM MODAL
    // =====================================

    viewRecommendedRoom.addEventListener(
        "click",
        function () {

            if (!currentRecommendation) {
                return;
            }

            const modalElement =
                document.getElementById(
                    currentRecommendation.modalId
                );

            if (modalElement && window.bootstrap) {
                const roomModal =
                    bootstrap.Modal.getOrCreateInstance(
                        modalElement
                    );

                roomModal.show();
            }
        }
    );


    // =====================================
    // TRY AGAIN
    // =====================================

    tryAgainButton.addEventListener(
        "click",
        function () {

            roomResultSection.hidden = true;
            roomFinderError.textContent = "";

            roomFinderSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            guestCount.focus();
        }
    );


    // =====================================
    // OPTIONAL WEB SPEECH API ASSISTANCE
    // =====================================

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (!SpeechRecognition) {

        voicePreferences.disabled = true;

        voiceStatus.textContent =
            "Voice assistance is not supported in this browser. Please use the form controls instead.";
    }
    else {

        const recognition =
            new SpeechRecognition();

        recognition.lang = "en-AU";
        recognition.continuous = false;
        recognition.interimResults = false;


        voicePreferences.addEventListener(
            "click",
            function () {

                voiceStatus.textContent =
                    "Listening... Try saying: I need a room for two people under 250 dollars with an ocean view.";

                try {
                    recognition.start();
                }
                catch (error) {
                    voiceStatus.textContent =
                        "Voice recognition is already active. Please speak your preferences.";
                }
            }
        );


        recognition.addEventListener(
            "result",
            function (event) {

                const transcript =
                    event.results[0][0].transcript;

                applyVoicePreferences(transcript);

                voiceStatus.textContent =
                    'Recognised: "' + transcript +
                    '". Please check the form, then select Find My Room.';
            }
        );


        recognition.addEventListener(
            "error",
            function (event) {

                if (event.error === "not-allowed") {
                    voiceStatus.textContent =
                        "Microphone permission was not granted. You can continue using the form controls.";
                }
                else if (event.error === "no-speech") {
                    voiceStatus.textContent =
                        "No speech was detected. Please try again or use the form controls.";
                }
                else {
                    voiceStatus.textContent =
                        "Voice recognition could not be completed. Please use the form controls or try again.";
                }
            }
        );
    }


    // Convert useful words from the recognised sentence
    // into the same values used by the form controls.
    function applyVoicePreferences(transcript) {

        const text = transcript.toLowerCase();

        // Guests
        const guestWords = {
            "one": "1",
            "two": "2",
            "three": "3",
            "four": "4"
        };

        const guestNumberMatch =
            text.match(/(?:for|room for)\s+(\d)\s+(?:guest|guests|people|person)/);

        if (guestNumberMatch) {
            guestCount.value = guestNumberMatch[1];
        }
        else {
            Object.keys(guestWords).forEach(
                function (word) {

                    if (
                        text.includes(word + " guests") ||
                        text.includes(word + " people") ||
                        text.includes(word + " person")
                    ) {
                        guestCount.value = guestWords[word];
                    }
                }
            );
        }

        // Budget
        const budgetMatch =
            text.match(/(?:under|below|budget(?: of)?|maximum|max)\s*\$?\s*(\d{2,4})/);

        if (budgetMatch) {
            roomBudget.value = budgetMatch[1];
        }
        else {
            const dollarMatch =
                text.match(/\$?\s*(\d{2,4})\s*dollars?/);

            if (dollarMatch) {
                roomBudget.value = dollarMatch[1];
            }
        }

        // Purpose of stay
        if (text.includes("romantic")) {
            stayPurpose.value = "romantic";
        }
        else if (text.includes("business")) {
            stayPurpose.value = "business";
        }
        else if (text.includes("family")) {
            stayPurpose.value = "family";
        }
        else if (
            text.includes("holiday") ||
            text.includes("vacation") ||
            text.includes("leisure")
        ) {
            stayPurpose.value = "holiday";
        }

        // Preferred room feature
        if (
            text.includes("ocean view") ||
            text.includes("sea view") ||
            text.includes("coastal view")
        ) {
            preferredFeature.value = "ocean view";
        }
        else if (text.includes("queen bed")) {
            preferredFeature.value = "queen bed";
        }
        else if (
            text.includes("large room") ||
            text.includes("larger room") ||
            text.includes("more space")
        ) {
            preferredFeature.value = "larger room";
        }
        else if (
            text.includes("multiple beds") ||
            text.includes("extra beds")
        ) {
            preferredFeature.value = "multiple beds";
        }

        // Accessibility requirement
        if (
            text.includes("accessible") ||
            text.includes("accessibility") ||
            text.includes("wheelchair") ||
            text.includes("step free") ||
            text.includes("step-free")
        ) {
            accessibilityRequirement.value = "required";
        }
    }


    // =====================================
    // SMALL DISPLAY HELPERS
    // =====================================

    function formatPurpose(purpose) {

        const purposeNames = {
            holiday: "holiday",
            business: "business",
            romantic: "romantic getaway",
            family: "family"
        };

        return purposeNames[purpose] || purpose;
    }


    function formatFeature(feature) {

        return feature
            .split(" ")
            .map(
                function (word) {
                    return word.charAt(0).toUpperCase() +
                        word.slice(1);
                }
            )
            .join(" ");
    }
}
