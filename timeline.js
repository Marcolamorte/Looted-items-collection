document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('timelineSlider');
    const markersContainer = document.querySelector('.timeline-markers');
    const eraInfo = document.getElementById('eraInfo');
    const imageDisplayContainer = document.getElementById('imageDisplayContainer'); // New container for images

    const eras = [
        { 
            position: 13, 
            title: "Ancient Era (500 BCE - 500 CE)", 
            description: "This period saw the creation of numerous artifacts that would later become subjects of colonial appropriation. The Parthenon Marbles, created in the 5th century BCE as integral components of the Parthenon temple in Athens, represent a significant example. These sculptures, depicting various mythological scenes and religious processions, remained in situ for over two millennia. Their eventual removal in the early 19th century by Lord Elgin, then British ambassador to the Ottoman Empire, sparked a debate on cultural ownership that continues to this day. Similarly, the Altar of Pergamon, constructed in the 2nd century BCE in what is now Turkey, stood as an example of Hellenistic architecture until its excavation and removal to Berlin in the late 19th century. These cases illustrate how ancient artifacts, created long before the colonial era, became entangled in later geopolitical dynamics and debates about cultural heritage.", 
            images: [
                "images/parthenon1.jpeg", // Replace with actual image paths
                "images/parthenon2.jpg",
                "images/parthenon3.jpg"
            ]
        },
        { 
            position: 30, 
            title: "Medieval Era (500 CE - 1500 CE)", 
            description: "During this epoch, numerous artifacts were produced that would subsequently become targets of colonial acquisition. The Sultanganj Buddha, a 7th-century copper statue discovered in Bihar, India, exemplifies this phenomenon. Standing over 2.3 meters tall and weighing over 500 kilograms, this statue represents the sophisticated metallurgical techniques of medieval India. Its removal during British colonial rule in the 19th century illustrates how medieval artifacts became subjects of later colonial appropriation. The Gdansk Astronomical Clock, an intricate 15th-century timepiece, presents a different case. While not a product of colonial looting per se, its removal from Gdansk (then Danzig) during World War II demonstrates how conflicts beyond the traditional colonial period resulted in the displacement of cultural artifacts.", 
            images: [
                "path/to/medieval-image1.jpg", // Replace with actual image paths
                "path/to/medieval-image2.jpg",
                "path/to/medieval-image3.jpg"
            ]
        },
        { 
            position: 50, 
            title: "Age of Exploration (1500 - 1700)", 
            description: "This era marked the beginning of European colonial expansion and the systematic appropriation of cultural artifacts from non-European societies. The Benin Bronzes, created from at least the 16th century onwards in the Kingdom of Benin (present-day Nigeria), serve as a prime example. These artifacts, including plaques, animal and human figurines, and items of royal regalia, were commissioned by the Oba (king) of Benin for ancestral altars and royal ceremonies. The sophistication of these works challenged European assumptions about African art and technology. Their eventual seizure by British forces in 1897 represents a pivotal moment in the history of colonial looting.", 
            images: [
                "path/to/exploration-image1.jpg", // Replace with actual image paths
                "path/to/exploration-image2.jpg",
                "path/to/exploration-image3.jpg"
            ]
        },
        { 
            position: 75, 
            title: "Imperial Era (1700 - 1914)", 
            description: "The height of European imperialism witnessed widespread appropriation of cultural artifacts from colonized territories. The Koh-i-Noor diamond, with its long and complex history in South Asia, exemplifies this trend. Originally mined in India, the diamond passed through various hands before being appropriated by the British East India Company in 1849 and subsequently becoming part of the British Crown Jewels. This transfer symbolizes the material and cultural exploitation inherent in colonial enterprises. The Old Summer Palace artifacts present another significant case. The looting and destruction of the Yuanmingyuan (Old Summer Palace) in Beijing by Anglo-French forces in 1860 during the Second Opium War resulted in the dispersal of numerous Chinese artifacts across Western collections. This event remains a potent symbol of the cultural devastation wrought by Western imperialism in China. The violent seizure of the Benin Bronzes in 1897 during a British punitive expedition represents another pivotal moment. This action resulted in the destruction of Benin City, the exile of Oba Ovonramwen, and the dispersal of thousands of artworks across European and American museums and private collections.", 
            images: [
                "path/to/imperial-image1.jpg", // Replace with actual image paths
                "path/to/imperial-image2.jpg",
                "path/to/imperial-image3.jpg"
            ]
        },
        { 
            position: 90, 
            title: "World Wars and Decolonization (1914 - 1960s)", 
            description: "This period saw continued appropriation during conflicts and the emergence of repatriation discourse. The Nok terracotta statues, dating from 500 BCE - 200 CE, were excavated in Nigeria in the 1940s. Many of these artifacts were subsequently exported illegally, highlighting the ongoing challenges of cultural heritage protection in the context of decolonization. The case of the Nok terracottas also illustrates the complexities of archaeological practice and artifact removal during the transition from colonial to post-colonial governance. The bust of Nefertiti, discovered in 1912 by German archaeologists in Amarna, Egypt, became a contentious symbol of colonial appropriation. Egypt has repeatedly requested its return from Germany, arguing that the bust was taken out of the country under dubious circumstances. This case exemplifies the ongoing debates about the legality and ethics of early 20th-century archaeological practices.", 
            images: [
                "path/to/decolonization-image1.jpg", // Replace with actual image paths
                "path/to/decolonization-image2.jpg",
                "path/to/decolonization-image3.jpg"
            ]
        }
    ];

    // Add markers
    eras.forEach(era => {
        const marker = document.createElement('div');
        marker.className = 'marker';
        marker.style.left = `${era.position}%`;
        markersContainer.appendChild(marker);
    });

    // Update info and images on slider change
    slider.addEventListener('input', () => {
        const currentPosition = slider.value;
        const currentEra = eras.reduce((prev, curr) => 
            (Math.abs(curr.position - currentPosition) < Math.abs(prev.position - currentPosition) ? curr : prev)
        );

        // Update eraInfo with title and description
        eraInfo.innerHTML = `<h2>${currentEra.title}</h2><p>${currentEra.description}</p>`;
        
        // Update displayed images
        imageDisplayContainer.innerHTML = ''; // Clear previous images
        currentEra.images.forEach(imageSrc => {
            const img = document.createElement('img');
            img.src = imageSrc; // Set image source
            img.alt = currentEra.title; // Set alt text
            img.style.width = '300px'; // Set width or adjust as needed
            img.style.marginRight = '10px'; // Space between images
            img.style.transition = 'opacity 0.3s'; // Animation transition
            img.style.opacity = '0'; // Start hidden

            setTimeout(() => {
                img.style.opacity = '1'; // Fade-in effect after adding to container
            }, 50); 

            imageDisplayContainer.appendChild(img);
        });
    });

    // Initialize with first era
    eraInfo.innerHTML = `<h2>${eras[0].title}</h2><p>${eras[0].description}</p>`;
    
    // Display initial images
    eras[0].images.forEach(imageSrc => {
        const img = document.createElement('img');
        img.src = imageSrc; // Set initial image source
        img.alt = eras[0].title; // Set alt text
        img.style.width = '300px'; // Set width or adjust as needed
        img.style.marginRight = '10px'; // Space between images
        img.style.transition = 'opacity 0.3s'; // Animation transition
        img.style.opacity = '1'; // Visible initially
    

        imageDisplayContainer.appendChild(img);
    });
});
