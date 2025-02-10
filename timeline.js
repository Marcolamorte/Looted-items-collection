document.addEventListener('DOMContentLoaded', function() {
    // const slider = document.getElementById('timelineSlider');
    const markersContainer = document.querySelector('.timeline-markers');
    const eraInfo = document.getElementById('eraInfo');
    const imageDisplayContainer = document.getElementById('imageDisplayContainer');

    const eras = [
        {
            position: 13,
            title: "Ancient Era (500 BCE - 500 CE)",
            description: "This period saw the creation of numerous artifacts that would later become subjects of colonial appropriation. The Parthenon Marbles, created in the 5th century BCE as integral components of the Parthenon temple in Athens, represent a significant example. These sculptures, depicting various mythological scenes and religious processions, remained in situ for over two millennia. Their eventual removal in the early 19th century by Lord Elgin, then British ambassador to the Ottoman Empire, sparked a debate on cultural ownership that continues to this day. Similarly, the Altar of Pergamon, constructed in the 2nd century BCE in what is now Turkey, stood as an example of Hellenistic architecture until its excavation and removal to Berlin in the late 19th century. These cases illustrate how ancient artifacts, created long before the colonial era, became entangled in later geopolitical dynamics and debates about cultural heritage.",
            images: [
                "images/cropped-parthenon1.jpg",
                "images/cropped-parthenon2.jpeg",
                "images/cropped-pergamon1.jpg",
                "images/cropped-pergamon2.jpg"
            ]
        },
        {
            position: 30,
            title: "Medieval Era (500 CE - 1500 CE)",
            description: "During this epoch, numerous artifacts were produced that would subsequently become targets of colonial acquisition. The Sultanganj Buddha, a 7th-century copper statue discovered in Bihar, India, exemplifies this phenomenon. Standing over 2.3 meters tall and weighing over 500 kilograms, this statue represents the sophisticated metallurgical techniques of medieval India. Its removal during British colonial rule in the 19th century illustrates how medieval artifacts became subjects of later colonial appropriation. The Gdansk Astronomical Clock, an intricate 15th-century timepiece, presents a different case. While not a product of colonial looting per se, its removal from Gdansk (then Danzig) during World War II demonstrates how conflicts beyond the traditional colonial period resulted in the displacement of cultural artifacts.",
            images: [
                "images/cropped-buddha1.jpg",
                "images/cropped-buddha2.jpg",
                "images/cropped-buddha3.jpg",
                "images/cropped-gdansk1.jpeg",
                "images/cropped-gdansk2.jpg",
            ]
        },
        {
            position: 50,
            title: "First Colonial Era (1500 - 1700)",
            description: "This era marked the beginning of European colonial expansion and the systematic appropriation of cultural artifacts from non-European societies. The Benin Bronzes, created from at least the 16th century onwards in the Kingdom of Benin (present-day Nigeria), serve as a prime example. These artifacts, including plaques, animal and human figurines, and items of royal regalia, were commissioned by the Oba (king) of Benin for ancestral altars and royal ceremonies. The sophistication of these works challenged European assumptions about African art and technology. Their eventual seizure by British forces in 1897 represents a pivotal moment in the history of colonial looting.",
            images: [
                "images/cropped-benin1.jpg",
                "images/cropped-benin2.jpg",
                "images/cropped-benin3.jpeg",
                "images/cropped-benin4.jpg",
            ]
        },
        {
            position: 75,
            title: "Imperial Era (1700 - 1914)",
            description: "The height of European imperialism witnessed widespread appropriation of cultural artifacts from colonized territories. The Koh-i-Noor diamond, with its long and complex history in South Asia, exemplifies this trend. Originally mined in India, the diamond passed through various hands before being appropriated by the British East India Company in 1849 and subsequently becoming part of the British Crown Jewels. This transfer symbolizes the material and cultural exploitation inherent in colonial enterprises. The Old Summer Palace artifacts present another significant case. The looting and destruction of the Yuanmingyuan (Old Summer Palace) in Beijing by Anglo-French forces in 1860 during the Second Opium War resulted in the dispersal of numerous Chinese artifacts across Western collections. This event remains a potent symbol of the cultural devastation wrought by Western imperialism in China. The violent seizure of the Benin Bronzes in 1897 during a British punitive expedition represents another pivotal moment. This action resulted in the destruction of Benin City, the exile of Oba Ovonramwen, and the dispersal of thousands of artworks across European and American museums and private collections.",
            images: [
                "images/cropped-summerpalace1.jpg",
                "images/cropped-summerpalace2.jpg",
                "images/cropped-summerpalace3.jpg",
                "images/cropped-summerpalace4.jpg",

            ]
        },
        {
            position: 90,
            
            title: "World Wars and Decolonization (1914 - 1960s)",
            description: "This period saw continued appropriation during conflicts and the emergence of repatriation discourse. The Nok terracotta statues, dating from 500 BCE - 200 CE, were excavated in Nigeria in the 1940s. Many of these artifacts were subsequently exported illegally, highlighting the ongoing challenges of cultural heritage protection in the context of decolonization. The case of the Nok terracottas also illustrates the complexities of archaeological practice and artifact removal during the transition from colonial to post-colonial governance. The bust of Nefertiti, discovered in 1912 by German archaeologists in Amarna, Egypt, became a contentious symbol of colonial appropriation. Egypt has repeatedly requested its return from Germany, arguing that the bust was taken out of the country under dubious circumstances. This case exemplifies the ongoing debates about the legality and ethics of early 20th-century archaeological practices.",
            images: [
                "images/cropped-nok1.jpg",
                "images/cropped-nok2.jpg",
                "images/cropped-nok3.jpg",
                "images/cropped-nefertiti1.jpg",
                "images/cropped-nefertiti2.jpg",

            ]
        }
    ];
    


    eras.forEach((era, index) => {
        const marker = document.createElement('div');
        marker.className = 'marker';
       
        marker.style.left = `${era.position}%`;
        
        
        marker.addEventListener('click', () => {
          
          document.querySelectorAll('.marker').forEach(m => m.classList.remove('selected'));
         
          marker.classList.add('selected');
  
         
          eraInfo.innerHTML = `
            <h2>${era.title}</h2>
            <p>${era.description}</p>
          `;
  
        
          imageDisplayContainer.innerHTML = '';
          era.images.forEach(imageSrc => {
            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = era.title;
            img.style.width = '400px';
            img.style.height = '300px'; 
            img.style.marginRight = '10px';
            img.style.transition = 'opacity 0.3s';
            img.style.opacity = '0';
  
         
            setTimeout(() => {
              img.style.opacity = '1';
            }, 50);
  
            imageDisplayContainer.appendChild(img);
          });
        });
  
        
        markersContainer.appendChild(marker);
      });
  
      
      if (eras.length > 0) {
        const defaultEra = eras[0];
        
      
        eraInfo.innerHTML = `
          <h2>${defaultEra.title}</h2>
          <p>${defaultEra.description}</p>
        `;
        
     
        defaultEra.images.forEach(imageSrc => {
          const img = document.createElement('img');
          img.src = imageSrc;
          img.alt = defaultEra.title;
          img.style.width = '400px';
          img.style.marginRight = '10px';
          img.style.transition = 'opacity 0.3s';
          img.style.opacity = '1';
          imageDisplayContainer.appendChild(img);
        });
  
        
        const firstMarker = markersContainer.querySelector('.marker');
        if (firstMarker) {
          firstMarker.classList.add('selected');
        }
      }
    });




