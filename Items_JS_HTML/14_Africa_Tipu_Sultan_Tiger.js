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
store.add(WD('Q1320874'), RDF('type'), CRM('E24'));
store.add(WD('Q1320874'), DC('subject'), literal('Tipu Sultan'));
store.add(WD('Q1320874'), DC('subject'), literal('Tiger'));
store.add(WD('Q1320874'), DC('subject'), literal('Indian art'));
store.add(WD('Q1320874'), DC('title'), literal('The Tipu Sultan’s Tiger'));
store.add(WD('Q1320874'), DCTERMS('created'), literal('1790-1795'));
store.add(WD('Q1320874'), DCTERMS('spatial'), WD('Q266923'));
store.add(WD('Q266923'), RDF('type'), CRM('E53'));
store.add(WD('Q266923'), DC('description'), literal('Monarchy in India (1399–1947).'));
store.add(WD('Q266923'), WDT('P17'), WD('Q668'));
store.add(WD('Q668'), RDF('type'), CRM('E53'));
store.add(WD('Q266923'), WDT('P276'), WD('Q1185'));
store.add(WD('Q1185'), RDF('type'), CRM('E53'));
store.add(WD('Q1185'), WDT('P1566'), literal('1267701', XSD('integer')));
store.add(WD('Q1185'), GEO('lat'), literal('14.66667', XSD('float')));
store.add(WD('Q1185'), GEO('long'), literal('75.83333', XSD('float')));
store.add(WD('Q1185'), OWL('sameAs'), namedNode('http://sws.geonames.org/1267701/'));
store.add(WD('Q1320874'), DC('description'), literal('A mechanical wooden sculpture depicting a tiger mauling a European soldier, symbolizing Tipu Sultans resistance to British rule. It is richly decorated and painted to reflect Tipu Sultan’s deep symbolic and political beliefs. The automaton also doubles as a mechanical organ. When operated, the device produces sound effects: the tiger roars and the soldier moans in agony, adding a darkly theatrical element to the piece.'));
store.add(WD('Q1320874'), DC('type'), literal('Automaton'));
store.add(WD('Q1320874'), DC('type'), literal('Mechanical Organ'));
store.add(WD('Q1320874'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P108i_was_produced_by'), CRM('E12'));
store.add(CRM('E12'), CRM('P33'), WD('Q337907'));
store.add(WD('Q337907'), RDF('type'), CRM('E29'));
store.add(WD('Q1320874'), DC('creator'), WD('Q4233718'));
store.add(WD('Q4233718'), RDF('type'), DCTERMS('Agent'));
store.add(WD('Q1320874'), CRM('P44'), ITO('Overall_good_with_some_flaws'));
store.add(ITO('Overall_good_with_some_flaws'), RDF('type'), CRM('E3'));
store.add(ITO('Overall_good_with_some_flaws'), RDFS('label'), literal('Overall good with some flaws'));
store.add(ITO('Overall_good_with_some_flaws'), CRM('P3'), literal('Some signs of wear and tear in the wooden structure. The paint decorations are fading in some areas and there are visible cracks and losses. There are scratches and minor damage on the surface. The internal mechanical organ is no longer in working condition and the mechanical components for moving the automaton have also suffered from rust, corrosion, and material fatigue rendering the mechanism inoperative.'));
store.add(WD('Q1320874'), DCTERMS('isPartOf'), WD('Q27699276'));
store.add(WD('Q27699276'), CRM('P3'), literal('South & South East Asia Collection.'));
store.add(WD('Q27699276'), RDF('type'), CRM('E78'));
store.add(WD('Q27699276'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P147i_was_curated_by'), CRM('E87'));
store.add(CRM('E87'), CRM('P14'), WD('Q213322'));
store.add(WD('Q213322'), RDF('type'), CRM('E39'));
store.add(WD('Q213322'), RDF('type'), CRM('E53'));
store.add(WD('Q213322'),  WDT('P131'),  WD('Q84'));
store.add(WD('Q213322'),  WDT('P1566'), literal('6619831', XSD('integer')));
store.add(WD('Q213322'), GEO('lat'), literal('51.4968', XSD('float')));
store.add(WD('Q213322'), GEO('long'), literal('-0.17273', XSD('float')));
store.add(WD('Q213322'), OWL('sameAs'), namedNode('http://sws.geonames.org/6619831/'));
store.add(WD('Q1320874'), CRM('P43'), WD('Q208826'));
store.add(WD('Q208826'), CRM('P90'), literal('71', XSD('float')));
store.add(WD('Q208826'), CRM('P91'), literal('centimeter'));
store.add(WD('Q208826'), RDF('type'), CRM('E54'));
store.add(WD('Q1320874'), CRM('P43'), WD('Q35059'));
store.add(WD('Q35059'), CRM('P90'), literal('61', XSD('float')));
store.add(WD('Q35059'), CRM('P91'), literal('centimeter'));
store.add(WD('Q35059'), RDF('type'), CRM('E54'));
store.add(WD('Q1320874'), CRM('P43'), WD('Q36253'));
store.add(WD('Q36253'), CRM('P90'), literal('30', XSD('float')));
store.add(WD('Q36253'), CRM('P91'), literal('centimeter'));
store.add(WD('Q36253'), RDF('type'), CRM('E54'));
store.add(WD('Q1320874'), CRM('P45'), WD('Q82001'));
store.add(WD('Q82001'), RDF('type'), CRM('E57'));
store.add(WD('Q1320874'), CRM('P45'), WD('Q287'));
store.add(WD('Q287'), RDF('type'), CRM('E57'));
store.add(WD('Q1320874'), CRM('P45'), WD('Q11426'));
store.add(WD('Q11426'), RDF('type'), CRM('E57'));
store.add(WD('Q1320874'), CRM('P52'), WD('Q213322'));
store.add(WD('Q213322'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P22i_acquired_title_through'),  ITO('Transfer_of_property'));
store.add(ITO('Transfer_of_property'), RDF('type'), CRM('E8'));
store.add(ITO('Transfer_of_property'), RDFS('label'), literal('Transfer of property'));
store.add(ITO('Transfer_of_property'), DC('date'), literal('1880', XSD('gYear')));
store.add(WD('Q1320874'), CRM('P51'), WD('Q83164'));
store.add(WD('Q83164'), RDF('type'), CRM('E39'));
store.add(WD('Q83164'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P23i_surrendered_title_through'), ITO('Transfer_of_property'));
store.add(WD('Q1320874'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P24i_changed_ownership_through'), ITO('Transfer_of_property'));
store.add(WD('Q1320874'), CRM('P55'), WD('Q213322'));
store.add(WD('Q1320874'), CRM('P27'), WD('Q266923'));
store.add(WD('Q1320874'), CRM('P26'), WD('Q84'));
store.add(WD('Q1320874'), CRM('P51'), WD('Q10088'));
store.add(WD('Q10088'), RDF('type'), CRM('E39'));
store.add(WD('Q10088'), RDF('type'), WD('Q116'));
store.add(WD('Q10088'), DC('description'), literal('Ruler of the Kingdom of Mysore from 1782 to 1799.'));
store.add(WD('Q10088'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P23i_surrendered_title_through'), WD('Q192623'));
store.add(WD('Q192623'), RDF('type'), CRM('E7'));
store.add(WD('Q192623'), CRM('P17'), WD('Q815204'));
store.add(WD('Q815204'), RDF('type'), CRM('E5'));
store.add(WD('Q815204'), DCTERMS('spatial'), WD('Q266923'));
store.add(WD('Q815204'), CRM('P4'), CRM('E52'));
store.add(CRM('E52'), DCTERMS('temporal'), literal("1799-04-05/1799-05-04"));
store.add(WD('Q815204'), WDT('P361'), WD('Q617782'));
store.add(WD('Q617782'), RDF('type'), CRM('E5'));
store.add(WD('Q617782'), DCTERMS('temporal'), literal("1798 – 4 May 1799"));
store.add(WD('Q617782'), WDT('P361'), WD('Q617321'));
store.add(WD('Q617321'), RDF('type'), CRM('E2'));
store.add(WD('Q617321'), DCTERMS('temporal'), literal("1767 - 1799"));
store.add(WD('Q617782'), CRM('P10'), ITO('British_Colonialism_in_India'));
store.add(ITO('British_Colonialism_in_India'), RDF('type'), WD('Q7167'));
store.add(ITO('British_Colonialism_in_India'), RDFS('label'), literal('British Colonialism in India'));
store.add(ITO('British_Colonialism_in_India'), RDF('type'), CRM('E2'));
store.add(ITO('British_Colonialism_in_India'), DCTERMS('temporal'), literal("1757-1947"));
store.add(WD('Q192623'), CRM('P14'), WD('Q83164'));
store.add(WD('Q83164'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P11i_participated_in'), WD('Q815204'));
store.add(WD('Q1320874'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P24i_changed_ownership_through'), WD('Q192623'));
store.add(WD('Q1320874'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P25i_moved_by'), WD('Q192623'));
store.add(WD('Q1320874'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P12i_was_present_at'), WD('Q815204'));



// Aggiungi label per classi/entità di Cidoc-crm/Wikidata/DC/DCTerms
store.add(CRM('E24'), RDFS('label'), literal("Physical Human-made thing"));
store.add(CRM('E53'), RDFS('label'), literal('Place')); 
store.add(CRM('E39'), RDFS('label'), literal('Actor'));
store.add(CRM('E12'), RDFS('label'), literal('Production'));
store.add(CRM('E29'), RDFS('label'), literal('Design or Procedure'));
store.add(CRM('E3'), RDFS('label'), literal('Condition State'));
store.add(CRM('E78'), RDFS('label'), literal('Curated Holding'));
store.add(CRM('E87'), RDFS('label'), literal('Curation Activity'));
store.add(CRM('E54'), RDFS('label'), literal('Dimension'));
store.add(CRM('E57'), RDFS('label'), literal('Material'))
store.add(CRM('E8'), RDFS('label'), literal('Acquisition'));
store.add(CRM('E7'), RDFS('label'), literal('Activity'));
store.add (CRM('E5'), RDFS('label'), literal('Event'));
store.add(CRM('E52'), RDFS('label'), literal("Time-Span"));
store.add(CRM('E2'), RDFS('label'), literal("Temporal Entity"));
store.add(WD('Q266923'), RDFS('label'), literal('Kingdom of Mysore'));
store.add(WD('Q1185'), RDFS('label'), literal('Karnataka'));
store.add(WD('Q668'), RDFS('label'), literal('India'));
store.add(WD('Q337907'), RDFS('label'), literal('Wood Carving'));
store.add(WD('Q4233718'), RDFS('label'), literal('Anonymous '));
store.add(WD('Q27699276'), RDFS('label'), literal('Museum Collection'));
store.add(WD('Q213322'), RDFS('label'), literal('Victoria and Albert Museum'));
store.add(WD('Q84'), RDFS('label'), literal('London'));
store.add(WD('Q35059'),  RDFS('label'), literal('Width'));
store.add(WD('Q208826'), RDFS('label'), literal('Height'));
store.add(WD('Q36253'), RDFS('label'), literal('Length'));
store.add(WD('Q82001'), RDFS('label'), literal('Ivory'));
store.add(WD('Q287'), RDFS('label'), literal('Wood'));
store.add(WD('Q11426'), RDFS('label'), literal('Metal'));
store.add(WD('Q83164'), SKOS('altLabel'), literal("British East India Company"));
store.add(WD('Q10088'), RDFS('label'), literal('Tipu Sultan'));
store.add(WD('Q116'), RDFS('label'), literal('Monarch'));
store.add(WD('Q192623'), RDFS('label'), literal('Looting'));
store.add(WD('Q815204'), RDFS('label'), literal('Siege of Seringapatam'));
store.add(WD('Q617782'), RDFS('label'), literal('Fourth Anglo-Mysore War'));
store.add(WD('Q617321'), RDFS('label'), literal('Anglo-Mysore Wars'));
store.add(WD('Q7167'), RDFS('label'), literal("Colonialism"));

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
salvaGrafo('C:\\Users\\HWRUser\\Desktop\\DHDK Course\\Web Design and Technologies\\Vitali project\\rdf_files_graphs\\14_Africa_Tipu_Sultan_Tiger.rdf');