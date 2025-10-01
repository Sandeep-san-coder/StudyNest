function loadContent(topic) {
    let contentFiles = {
        'html_intro': 'Content/html_intro.html',
        'FOC_Unit2': 'Content/FOC_Unit2.html'
    };

    let filePath = contentFiles[topic];

    if (filePath) {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to load file.");
                }
                return response.text();
            })
            .then(data => {
                document.getElementById('content').innerHTML = data;
            })
            .catch(error => {
                console.error("Error loading content:", error);
                document.getElementById('content').innerHTML = "<p>Failed to load content.</p>";
            });
    } else {
        document.getElementById('content').innerHTML = "<p>Content not available.</p>";
    }
}

// Function to toggle submenu visibility
function toggleSubmenu(id) {
    let submenu = document.getElementById(id);
    submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
}
