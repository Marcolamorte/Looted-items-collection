// Importa RDFLib e il modulo fs
import { graph, Namespace, literal, namedNode, serialize } from 'rdflib';
import { writeFile } from 'fs';



// Definisci i namespace
const CRM = Namespace('http://www.cidoc-crm.org/cidoc-crm/');
const ITO = Namespace('http://www.itemsontology.com/item_features/');
const DBO = Namespace('http://dbpedia.org/ontology/');
const DC = Namespace('http://purl.org/dc/elements/1.1/');
const DCTERMS = Namespace('http://purl.org/dc/terms/');
const GEO = Namespace ('http://www.w3.org/2003/01/geo/wgs84_pos#')
const OWL = Namespace ('https://www.w3.org/2002/07/owl#');
const RDF = Namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#');
const RDFS = Namespace('http://www.w3.org/2000/01/rdf-schema#');
const SKOS = Namespace ('http://www.w3.org/2004/02/skos/core#');
const XSD = Namespace ('http://www.w3.org/2001/XMLSchema#');
const WDT = Namespace('https://www.wikidata.org/prop/direct/');
const WD = Namespace('https://www.wikidata.org/wiki/');


// Crea un nuovo grafo RDF
const store = graph();



// Aggiungi tutte le triple al grafo
store.add(ITO('Nok_terracotta_statues'), RDF('type'), CRM('E24'));
store.add(ITO('Nok_terracotta_statues'), RDFS('label'), literal('Nok terracotta statues'));
store.add(ITO('Nok_terracotta_statues'), DC('title'), literal('The Nok terracotta statues'));
store.add(ITO('Nok_terracotta_statues'), DC('creator'), WD('Q927291'));
store.add(WD('Q927291'), RDF('type'), DCTERMS('Agent'));
store.add(WD('Q927291'), RDF('type'), CRM('E39'));
store.add(WD('Q927291'), RDF('type'), CRM('E74'));
store.add(ITO('Nok_terracotta_statues'), DC('type'), literal('sculpture'));
store.add(ITO('Nok_terracotta_statues'), DCTERMS('created'), literal('1500 BCE - 500 CE'));
store.add(ITO('Nok_terracotta_statues'), DC('subject'), literal('Nok Site (Nigeria)'));
store.add(ITO('Nok_terracotta_statues'), DC('subject'), literal('Terracotta sculpture'));
store.add(ITO('Nok_terracotta_statues'), DC('subject'), literal('Nigerian Art'));
store.add(ITO('Nok_terracotta_statues'), DCTERMS('spatial'), WD('Q7047825'));
store.add(WD('Q7047825'), DC('description'), literal('Village in Nigeria'));
store.add(WD('Q7047825'), WDT('P1566'), literal('2328757', XSD('integer')));
store.add(WD('Q7047825'), GEO('lat'), literal('9.49024', XSD('float')));
store.add(WD('Q7047825'), GEO('long'), literal('8.02111', XSD('float')));
store.add(WD('Q7047825'), OWL('sameAs'), namedNode('http://sws.geonames.org/2328757/'));
store.add(WD('Q7047825'), RDF('type'), CRM('E53'));
store.add(WD('Q7047825'), WDT('P131'), WD('Q208318'));
store.add(WD('Q208318'), RDF('type'), CRM('E53'));
store.add(WD('Q208318'), WDT('P17'), WD('Q1033'));
store.add(WD('Q1033'), RDF('type'), CRM('E53'));
store.add(ITO('Nok_terracotta_statues'), DC('description'), literal('The Nok terracotta statues are remarkable artifacts from the Nok culture, one of Africa’s earliest known civilizations, which flourished in what is now Nigeria between approximately 1500 BCE to 500 CE . The Nok people are known for their advanced terracotta production, particularly their intricate sculptures, which are considered some of the oldest known sculptures in sub-Saharan Africa. The Nok terracotta statues likely represent a range of subjects, including humans, animals, and possibly mythical or spiritual beings, reflecting the beliefs, customs, and societal structures of the Nok culture.'));
store.add(ITO('Nok_terracotta_statues'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P108i_was_produced_by'), CRM('E12'));
store.add(CRM('E12'), CRM('P33'), WD('Q21711025'));
store.add(WD('Q21711025'), RDF('type'), CRM('E29'));
store.add(ITO('Nok_terracotta_statues'), DCTERMS('isPartOf'), WD('Q27699276'));
store.add(WD('Q27699276'), CRM('P3'), literal('There is no a uniform collection because many statues have been moved in different museums around the world.'));
store.add(WD('Q27699276'), RDF('type'), CRM('E78'));
store.add(WD('Q27699276'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P147i_was_curated_by'), CRM('E87'));
store.add(CRM('E87'), CRM('P14'), WD('Q6373'));
store.add(CRM('E87'), CRM('P14'), WD('Q148554'));
store.add(CRM('E87'), CRM('P14'), WD('Q160236'));
store.add(CRM('E87'), CRM('P14'), WD('Q19675'));
store.add(ITO('Nok_terracotta_statues'), CRM('P44'), ITO('Well_preserved_state'));
store.add(ITO('Well_preserved_state'), RDF('type'), CRM('E3'));
store.add(ITO('Well_preserved_state'), RDFS('label'), literal('Well preserved state'));
store.add(ITO('Nok_terracotta_statues'), CRM('P44'), ITO('Highly_fragmented_and_eroded_state'));
store.add(ITO('Highly_fragmented_and_eroded_state'), RDF('type'), CRM('E3'));
store.add(ITO('Highly_fragmented_and_eroded_state'), RDFS('label'), literal('Highly fragmented and eroded state'));
store.add(CRM('E3'), CRM('P3'), literal('Due to natural erosion and exposure to enviromental elements may of them were found in fragmentary condition."Others have been found in remarkably intact condition, with minimal damage or breakage.'));
store.add(ITO('Nok_terracotta_statues'), CRM('P45'), WD('Q60424'));
store.add(WD('Q60424'), RDF('type'), CRM('E57'));
store.add(ITO('Nok_terracotta_statues'), CRM('P52'), WD('Q148554'));
store.add(ITO('Nok_terracotta_statues'), CRM('P55'), WD('Q148554'));
store.add(WD('Q148554'), RDF('type'), CRM('E53'));
store.add(WD('Q148554'), RDF('type'), WD('Q33506'));
store.add(WD('Q148554'), WDT('P131'), WD('Q61'));
store.add(WD('Q148554'), WDT('P17'), WD('Q30'));
store.add(WD('Q148554'), WDT('P1566'), literal('4139757', XSD('integer')));
store.add(WD('Q148554'), GEO('lat'), literal('38.89122', XSD('float')));
store.add(WD('Q148554'), GEO('long'), literal('-77.02609', XSD('float')));
store.add(WD('Q148554'), OWL('sameAs'), namedNode('http://sws.geonames.org/4139757/'));
store.add(ITO('Nok_terracotta_statues'), CRM('P52'), WD('Q160236'));
store.add(ITO('Nok_terracotta_statues'), CRM('P55'), WD('Q160236'));
store.add(WD('Q160236'), RDF('type'), CRM('E53'));
store.add(WD('Q160236'), RDF('type'), WD('Q33506'));
store.add(WD('Q160236'), WDT('P276'), WD('Q60'));
store.add(WD('Q160236'), WDT('P17'), WD('Q30'));
store.add(WD('Q160236'), WDT('P1566'), literal('5126698', XSD('integer')));
store.add(WD('Q160236'), GEO('lat'), literal('40.77955', XSD('float')));
store.add(WD('Q160236'), GEO('long'), literal('-73.96292', XSD('float')));
store.add(WD('Q160236'), OWL('sameAs'), namedNode('http://sws.geonames.org/5126698/'));
store.add(ITO('Nok_terracotta_statues'), CRM('P52'), WD('Q19675'));
store.add(ITO('Nok_terracotta_statues'), CRM('P55'), WD('Q19675'));
store.add(WD('Q19675'), RDF('type'), CRM('E53'));
store.add(WD('Q19675'), RDF('type'), WD('Q33506'));
store.add(WD('Q19675'), WDT('P276'), WD('Q90'));
store.add(WD('Q19675'), WDT('P17'), WD('Q46'));
store.add(WD('Q19675'), WDT('P1566'), literal('2997319', XSD('integer')));
store.add(WD('Q19675'), GEO('lat'), literal('48.86102', XSD('float')));
store.add(WD('Q19675'), GEO('long'), literal('2.33587', XSD('float')));
store.add(WD('Q19675'), OWL('sameAs'), namedNode('http://sws.geonames.org/2997319/'));
store.add(ITO('Nok_terracotta_statues'), CRM('P52'), WD('Q6373'));
store.add(ITO('Nok_terracotta_statues'), CRM('P55'), WD('Q6373'));
store.add(WD('Q6373'), RDF('type'), CRM('E53'));
store.add(WD('Q6373'), RDF('type'), WD('Q33506'));
store.add(WD('Q6373'), WDT('P131'), WD('Q84'));
store.add(WD('Q6373'), WDT('P17'), WD('Q46'));
store.add(WD('Q6373'), WDT('P1566'), literal('6697862', XSD('integer')));
store.add(WD('Q6373'), GEO('lat'), literal('51.51945', XSD('float')));
store.add(WD('Q6373'), GEO('long'), literal('-0.12708', XSD('float')));
store.add(WD('Q6373'), OWL('sameAs'), namedNode('http://sws.geonames.org/6697862/'));
store.add(ITO('Nok_terracotta_statues'), CRM('P27'), WD('Q7047825'));
store.add(ITO('Nok_terracotta_statues'), CRM('P26'), WD('Q30'));
store.add(WD('Q30'), RDF('type'), CRM('E53'));
store.add(ITO('Nok_terracotta_statues'), CRM('P26'), WD('Q46'));
store.add(WD('Q46'), RDF('type'), CRM('E53'));
store.add(ITO('Nok_terracotta_statues'), CRM('P51'), WD('Q927291'));
store.add(WD('Q927291'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P23i_surrendered_title_through'), WD('Q192623'));
store.add(WD('Q192623'), RDF('type'), CRM('E7'));
store.add(WD('Q192623'), CRM('P17'), ITO('American_Discoveries'));
store.add(ITO('American_Discoveries'), RDF('type'), CRM('E5'));
store.add(ITO('American_Discoveries'), CRM('P4'), CRM('E52'));
store.add(CRM('E52'), DCTERMS('temporal'), literal('1920-1990'));
store.add(ITO('American_Discoveries'), CRM('P10'), WD('Q605269'));
store.add(WD('Q605269'), RDF('type'), CRM('E2'));
store.add(WD('Q605269'), RDF('type'), WD('Q7260'));
store.add(WD('Q605269'), DCTERMS('temporal'), literal('19th - 20th century'));
store.add(ITO('American_Discoveries'), DCTERMS('spatial'), WD('Q7047825'));
store.add(ITO('American_Discoveries'), DCTERMS('spatial'), WD('Q208318'));
store.add(ITO('American_Discoveries'), RDFS('label'), literal('American Discoveries'));
store.add(WD('Q192623'), CRM('P17'), ITO('European_Discoveries'));
store.add(ITO('European_Discoveries'), RDF('type'), CRM('E5'));
store.add(ITO('European_Discoveries'), CRM('P4'), CRM('E52'));
store.add(CRM('E52'), DCTERMS('temporal'), literal('1920-1990'));
store.add(ITO('European_Discoveries'), CRM('P10'), WD('Q17631847'));
store.add(WD('Q17631847'), RDF('type'), CRM('E2'));
store.add(WD('Q17631847'), RDF('type'), WD('Q7167'));
store.add(WD('Q17631847'), DCTERMS('temporal'), literal('19th - 20th century'));
store.add(ITO('European_Discoveries'), DCTERMS('spatial'), WD('Q7047825'));
store.add(ITO('European_Discoveries'), DCTERMS('spatial'), WD('Q208318'));
store.add(ITO('European_Discoveries'), RDFS('label'), literal('European Discoveries'));
store.add(WD('Q192623'), CRM('P14'), ITO('American_Collectors'));
store.add(ITO('American_Collectors'), RDF('type'), CRM('E39'));
store.add(ITO('American_Collectors'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P11i_participated_in'), ITO('American_Discoveries'));
store.add(ITO('American_Collectors'), RDFS('label'), literal('American Collectors'));
store.add(WD('Q192623'), CRM('P14'), ITO('European_Collectors'));
store.add(ITO('European_Collectors'), RDF('type'), CRM('E39'));
store.add(ITO('European_Collectors'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P11i_participated_in'), ITO('European_Discoveries'));
store.add(ITO('European_Collectors'), RDFS('label'), literal('European Collectors'));
store.add(ITO('Nok_terracotta_statues'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P24i_changed_ownership_through'), WD('Q192623'));
store.add(ITO('Nok_terracotta_statues'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P25i_moved_by'), WD('Q192623'));
store.add(ITO('Nok_terracotta_statues'), WDT('P575'), literal('1928', XSD('gYear')));
store.add(ITO('Nok_terracotta_statues'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P12i_was_present_at'), ITO('American_Discoveries'));
store.add(ITO('Nok_terracotta_statues'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P12i_was_present_at'), ITO('European_Discoveries'));
store.add(ITO('John_Dent-Young'), WDT('P61'), ITO('Nok_terracotta_statues'));
store.add(ITO('John_Dent-Young'), RDF('type'), CRM('E21'));
store.add(ITO('John_Dent-Young'),  RDFS('label'), literal('John Dent-Young'));

// Aggiungi label per classi/entità di Cidoc-crm/Wikidata/DC/DCTerms
store.add(CRM('E24'), RDFS('label'), literal("Physical Human-made thing"));
store.add(CRM('E12'), RDFS('label'), literal('Production'));
store.add(CRM('E53'), RDFS('label'), literal('Place')); 
store.add(CRM('E29'), RDFS('label'), literal('Design or Procedure'));
store.add(CRM('E78'), RDFS('label'), literal('Curated Holding'));
store.add(CRM('E87'), RDFS('label'), literal('Curation Activity'));
store.add(CRM('E39'), RDFS('label'), literal('Actor'));
store.add(CRM('E74'), RDFS('label'), literal('Group'));
store.add(CRM('E3'), RDFS('label'), literal('Condition State'));
store.add(CRM('E57'), RDFS('label'), literal('Material'));
store.add(CRM('E7'), RDFS('label'), literal('Activity'));
store.add(CRM('E5'), RDFS('label'), literal('Event'));
store.add(CRM('E52'), RDFS('label'), literal("Time-Span"));
store.add(CRM('E2'), RDFS('label'), literal("Temporal Entity"));
store.add(CRM('E21'), RDFS('label'), literal('Person'));
store.add(WD('Q21711025'), RDFS('label'), literal('Sculpture Technique'));
store.add(WD('Q27699276'), RDFS('label'), literal('Museum Collection'));
store.add(WD('Q927291'), RDFS('label'), literal('Nok culture'));
store.add(WD('Q7047825'), RDFS('label'), literal('Nok'));
store.add(WD('Q1033'), RDFS('label'), literal('Nigeria'));
store.add(WD('Q208318'), RDFS('label'), literal('Kaduna'));
store.add(WD('Q6373'), RDFS('label'), literal('British Museum'));
store.add(WD('Q148554'), RDFS('label'), literal('National Museum of Natural History'));
store.add(WD('Q160236'), RDFS('label'), literal('Metropolitan Museum of Art'));
store.add(WD('Q19675'), RDFS('label'), literal('Louvre Museum'));
store.add(WD('Q60424'), RDFS('label'), literal('Terracotta'));
store.add(WD('Q33506'), RDFS('label'), literal('Museum'));
store.add(WD('Q61'), RDFS('label'), literal('Washington D.C'));
store.add(WD('Q60'), RDFS('label'), literal('New York City'));
store.add(WD('Q30'), RDFS('label'), literal('United States of America'));
store.add(WD('Q90'), RDFS('label'), literal('Paris'));
store.add(WD('Q84'), RDFS('label'), literal('London'));
store.add(WD('Q46'), RDFS('label'), literal('Europe'));
store.add(WD('Q192623'), RDFS('label'), literal('Looting'));
store.add(WD('Q17631847'), RDFS('label'), literal('European colonialism'));
store.add(WD('Q7167'), RDFS('label'), literal('Colonialism'));
store.add(WD('Q605269'), RDFS('label'), literal('American Imperialism'));
store.add(WD('Q7260'), RDFS('label'), literal('Imperialism'));
store.add (DCTERMS('Agent'), RDFS('label'), literal('Agent'));

// Funzione per serializzare e salvare il grafo come file .rdf
function salvaGrafo(percorsoOutput) {
    serialize(null, store, 'https://www.example.org/', 'application/rdf+xml', (err, result) => {
        if (err) {
            console.error('Errore durante la serializzazione:', err);
        } else {
            writeFile(percorsoOutput, result, (err) => {
                if (err) {
                    console.error('Errore durante il salvataggio del file:', err);
                } else {
                    console.log(`File RDF salvato con successo come "${percorsoOutput}"`);
                }
            });
        }
    });
}

// Salva il file RDF
salvaGrafo('C:\\Users\\HWRUser\\Desktop\\DHDK Course\\Web Design and Technologies\\Vitali project\\rdf_files_graphs\\10_Africa_Nok_Terracotta_Statues.rdf');