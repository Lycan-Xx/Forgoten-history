import { HistoricalEvent } from '../types';

export const historicalEvents: HistoricalEvent[] = [
  {
    id: '1',
    title: "The Father of Railways as Master Integrator, Not Lone Inventor",
    description: "In the early 1800s, Britain's mining hills echoed with the clang of steam. In 1804, Richard Trevithick—an audacious Cornish engineer—built and operated the very first full-scale steam locomotive on rails in South Wales. Picture this: packing enough steam into a boiler to push iron wheels along rails. Trevithick's 'Penydarren Engine' in February 1804 was heavy, crude, and often broke the brittle cast-iron tracks, but it proved the concept could work. Fast forward two decades: George Stephenson, already a practical tinkerer in Northumberland's coal mines, learned from Trevithick's bold experiment and improved every component. Rather than inventing something entirely new, Stephenson borrowed Trevithick's high-pressure steam insights and track-metal expertise from innovators like William Losh. He designed wrought-iron rails that wouldn't shatter under weight, standardized the gauge to 4 ft 8 ½ in (the 'Stephenson gauge'), and built locomotives with more reliable boilers and flanged wheels for better traction. In 1825, Stephenson's 'Locomotion No. 1' hauled coal and passengers along the Stockton & Darlington Railway—the first publicly-funded steam railway line. Five years later, he and his son Robert debuted the famous 'Rocket' at the Rainhill Trials, proving that a well-integrated engine, track, and mechanical system could transform transportation forever. Because he combined all these elements into a working, reproducible system—rather than creating a one-off experiment—Victorians called him the 'Father of Railways.' The real achievement was Stephenson's ability to weave existing technologies into a commercially successful network.",
    period: "1804-1829",
    year: "1804",
    imageUrl: "https://example.com/railways.jpg",
    imageAlt: "Illustration of the Penydarren Engine",
    bulletPoints: [
      "Richard Trevithick's Penydarren Engine (1804)",
      "George Stephenson's Locomotion No. 1 (1825)",
      "Stephenson's Rocket at Rainhill Trials (1829)"
    ],
    sources: [
      { text: "Richard Trevithick and the first railway locomotive", url: "https://www.britannica.com" },
      { text: "George Stephenson's work on Stockton & Darlington Railway", url: "https://en.wikipedia.org" }
    ]
  },
  {
    id: 'event-1',
    title: 'The Antikythera Mechanism',
    period: 'Ancient Greece',
    year: '150-100 BCE',
    description: 'An ancient Greek analog computer used to predict astronomical positions and eclipses decades in advance. Discovered in a shipwreck, it reveals astronomical knowledge and mechanical technology far more advanced than previously thought possible for that era.',
    bulletPoints: [
      'World\'s oldest known analog computer',
      'Used at least 30 bronze gears',
      'Could track moon phases, planet positions, and eclipses',
      'Demonstrates ancient Greek astronomical knowledge',
      'More sophisticated than any known instrument from the following 1,000 years'
    ],
    imageUrl: 'https://images.pexels.com/photos/4195826/pexels-photo-4195826.jpeg',
    imageAlt: 'Ancient astronomical device',
    sources: [
      {
        text: 'The Antikythera Mechanism Research Project',
        url: 'https://www.antikythera-mechanism.gr/'
      },
      {
        text: 'Nature: "Decoding the ancient Greek astronomical calculator known as the Antikythera Mechanism"'
      }
    ],
    category: 'science'
  },
  {
    id: 'event-2',
    title: 'The Dancing Plague of 1518',
    period: 'Renaissance Europe',
    year: '1518',
    description: 'A case of dancing mania that occurred in Strasbourg, Alsace (then part of the Holy Roman Empire) in July 1518. Numerous people danced uncontrollably for days without rest, and over the period of about one month, some died of heart attack, stroke, or exhaustion.',
    bulletPoints: [
      'Started with one woman dancing for 4-6 days',
      'Eventually involved 400 participants',
      'Many danced until they collapsed from exhaustion',
      'Authorities encouraged more dancing, believing it would cure the affliction',
      'Multiple theories exist about the cause, including ergot poisoning and mass psychogenic illness'
    ],
    imageUrl: 'https://images.pexels.com/photos/2152958/pexels-photo-2152958.jpeg',
    imageAlt: 'Medieval town illustration',
    sources: [
      {
        text: 'Waller, John: "A Time to Dance, A Time to Die: The Extraordinary Story of the Dancing Plague of 1518"'
      },
      {
        text: 'The Lancet: "The dancing plague: a public health conundrum"'
      }
    ],
    category: 'culture'
  },
  {
    id: 'event-3',
    title: 'The Tunguska Event',
    period: 'Modern Era',
    year: '1908',
    description: 'A massive explosion that occurred near the Podkamennaya Tunguska River in Siberia, Russia. The explosion flattened an estimated 80 million trees over an area of 2,150 km². The event is generally attributed to the air burst of a meteoroid or comet.',
    bulletPoints: [
      'Explosion estimated at 10-15 megatons of TNT',
      'Flattened 2,000 square kilometers of forest',
      'No impact crater was ever found',
      'Bright blue light and loud explosions reported hundreds of kilometers away',
      'Occurred in an extremely remote area with few witnesses'
    ],
    imageUrl: 'https://images.pexels.com/photos/5282567/pexels-photo-5282567.jpeg',
    imageAlt: 'Forest landscape from above',
    sources: [
      {
        text: 'NASA: "The Tunguska Impact--100 Years Later"',
        url: 'https://science.nasa.gov/science-news/science-at-nasa/2008/30jun_tunguska/'
      },
      {
        text: 'Smithsonian Magazine: "The Mysterious Tunguska Event"'
      }
    ],
    category: 'science'
  }
];