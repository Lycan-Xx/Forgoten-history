import { HistoricalEvent } from '../types';

export const historicalEvents: HistoricalEvent[] = [
  {
    id: 'event-1',
    title: 'The Father of Railways as Master Integrator',
    period: 'Industrial Revolution',
    year: '1804-1830',
    description: 'In the early 1800s, Britain\'s mining hills echoed with the clang of steam. Richard Trevithick built the first full-scale steam locomotive in 1804, but it was George Stephenson who transformed this crude experiment into a revolutionary transportation system.',
    fullStory: `In the early 1800s, Britain's mining hills echoed with the clang of steam. In 1804, Richard Trevithick—an audacious Cornish engineer—built and operated the very first full-scale steam locomotive on rails in South Wales. Picture this: packing enough steam into a boiler to push iron wheels along rails. Trevithick's "Penydarren Engine" in February 1804 was heavy, crude, and often broke the brittle cast-iron tracks, but it proved the concept could work.

Fast forward two decades: George Stephenson, already a practical tinkerer in Northumberland's coal mines, learned from Trevithick's bold experiment and improved every component. Rather than inventing something entirely new, Stephenson borrowed Trevithick's high-pressure steam insights and track-metal expertise from innovators like William Losh. He designed wrought-iron rails that wouldn't shatter under weight, standardized the gauge to 4 ft 8 ½ in (the "Stephenson gauge"), and built locomotives with more reliable boilers and flanged wheels for better traction.

In 1825, Stephenson's "Locomotion No. 1" hauled coal and passengers along the Stockton & Darlington Railway—the first publicly-funded steam railway line. Five years later, he and his son Robert debuted the famous "Rocket" at the Rainhill Trials, proving that a well-integrated engine, track, and mechanical system could transform transportation forever. Because he combined all these elements into a working, reproducible system—rather than creating a one-off experiment—Victorians called him the "Father of Railways." The real achievement was Stephenson's ability to weave existing technologies into a commercially successful network.`,
    bulletPoints: [
      'Richard Trevithick\'s "Penydarren Engine" (1804) was the first steam locomotive on rails',
      'George Stephenson designed wrought-iron rails that wouldn\'t shatter under weight',
      'Standardized the gauge to 4 ft 8 ½ in (the "Stephenson gauge")',
      'Built locomotives with more reliable boilers and flanged wheels for better traction',
      'Stephenson\'s "Locomotion No. 1" (1825) hauled coal and passengers on the first public steam railway',
      'The famous "Rocket" (1830) proved the viability of integrated railway systems'
    ],
    mainImageUrl: 'https://images.pexels.com/photos/258045/pexels-photo-258045.jpeg',
    mainImageAlt: 'Historic steam locomotive on railway tracks',
    storyImages: [
      {
        url: 'https://images.pexels.com/photos/1292998/pexels-photo-1292998.jpeg',
        alt: 'Early steam engine machinery representing Trevithick\'s Penydarren Engine',
        caption: 'Trevithick\'s "Penydarren Engine" (1804) - The first steam locomotive on rails'
      },
      {
        url: 'https://images.pexels.com/photos/258045/pexels-photo-258045.jpeg',
        alt: 'Steam locomotive on railway tracks',
        caption: 'Stephenson\'s "Locomotion No. 1" (1825) - First public steam railway'
      },
      {
        url: 'https://images.pexels.com/photos/1292998/pexels-photo-1292998.jpeg',
        alt: 'Historic steam locomotive representing The Rocket',
        caption: 'The famous "Rocket" (1830) at the Rainhill Trials'
      },
      {
        url: 'https://images.pexels.com/photos/2152958/pexels-photo-2152958.jpeg',
        alt: 'Railway tracks showing standardized gauge',
        caption: 'Stephenson\'s standardized 4 ft 8 ½ in gauge - still used worldwide today'
      }
    ],
    sources: [
      {
        text: 'Richard Trevithick and the first railway locomotive (Penydarren, 1804): Encyclopedia Britannica'
      },
      {
        text: 'George Stephenson\'s work on Stockton & Darlington Railway (1825) and the Rocket (1829): Wikipedia entries on George Stephenson and Stephenson\'s Rocket'
      }
    ],
    category: 'technology'
  },
  {
    id: 'event-2',
    title: '"Horsepower" as the Ultimate Marketing Strategy',
    period: 'Industrial Revolution',
    year: '1769-1776',
    description: 'James Watt revolutionized steam engines and coined the term "horsepower" to market their power effectively.',
    fullStory: `During the 1760s and 1770s, Newcomen steam engines pumped water from mines but consumed enormous amounts of fuel and worked slowly. James Watt—a curious Scotsman and instrument maker—observed steam's potential and realized its vast, untapped power. By 1776, Watt had patented a separate-condenser design that drastically reduced fuel consumption and allowed steam to perform much more work.

But to sell this revolutionary device, Watt needed buyers to understand its power in familiar terms. He watched mine horses labor day after day, hauling heavy wagons. Estimating that an average mine horse could lift 550 pounds one foot in one second, he coined the term "horsepower"—defining it as exactly that: 550 foot-pounds per second of work. Now, instead of using technical jargon, Watt could tell customers, "This engine is as strong as 20 horses!" This simple comparison helped mine operators, mill owners, and early industrialists visualize how many horses a single engine could replace—and the concept sold tremendously. Within years, "horsepower" became the standard measure for all types of machines (and still appears on every car's specifications today).`,
    bulletPoints: [
      'James Watt patented the separate-condenser steam engine in 1776',
      'Coined the term "horsepower" to compare engine power to horses',
      'Defined horsepower as 550 foot-pounds per second of work',
      'Helped industrialists visualize engine efficiency and power',
      'Horsepower became the universal standard for machine power measurement'
    ],
    mainImageUrl: 'https://images.pexels.com/photos/1292998/pexels-photo-1292998.jpeg',
    mainImageAlt: 'Illustration of James Watt and steam engine',
    storyImages: [
      {
        url: 'https://images.pexels.com/photos/1292998/pexels-photo-1292998.jpeg',
        alt: 'James Watt observing steam engine',
        caption: 'James Watt revolutionized steam engines with his separate-condenser design'
      },
      {
        url: 'https://images.pexels.com/photos/2152958/pexels-photo-2152958.jpeg',
        alt: 'Illustration of horsepower comparison',
        caption: 'Watt coined "horsepower" to market his engines effectively'
      }
    ],
    sources: [
      {
        text: 'Watt\'s improvements to the Newcomen engine and separate condenser (1769–1776): Wikipedia entry on James Watt'
      },
      {
        text: 'Development and marketing of "horsepower" measurement: Hagerty automotive history archives'
      }
    ],
    category: 'technology'
  },
  {
    id: 'event-3',
    title: 'How a Church Outing Created the World\'s First Travel Agency',
    period: 'Victorian Era',
    year: '1841',
    description: 'Thomas Cook organized a church outing by train, laying the foundation for modern package tourism.',
    fullStory: `In July 1841, Leicester's winding lanes were dusty from harvest season, and Thomas Cook—a 32-year-old Baptist preacher and temperance advocate—was frustrated by poor attendance at his anti-alcohol meetings. One morning, as he walked the 15 miles from Market Harborough to a temperance meeting in Leicester, he had an idea: why not put his congregation on a train instead of making them walk?

Cook negotiated with the Midland Counties Railway to charter a train and arranged for 540 church members to travel from Leicester's Campbell Street Station to Loughborough—just 11 miles away—for one shilling each (covering both tickets and a simple meal). The trip was a huge success. Passengers sang hymns on board, shared religious pamphlets, and returned energized. Cook realized he wasn't just moving people from place to place; he was creating an entire experience.

The trip's success convinced him to organize more excursions: visits to gothic cathedrals in York, seaside holidays in Scarborough, and eventually tours across Europe. By the late 1840s, his "Thomas Cook & Son" business provided tickets, hotels, meals, and guided tours in complete packages. A simple train trip for church members became the foundation of modern package tourism—making travel accessible, organized, and reliably enjoyable for ordinary people.`,
    bulletPoints: [
      'Thomas Cook organized his first church outing by train in 1841',
      'Chartered a train for 540 passengers from Leicester to Loughborough',
      'Pioneered the concept of package tourism with tickets, meals, and guides',
      'Expanded to organize tours across Europe by the late 1840s',
      'Founded "Thomas Cook & Son", the world\'s first travel agency'
    ],
    mainImageUrl: 'https://images.pexels.com/photos/2152958/pexels-photo-2152958.jpeg',
    mainImageAlt: 'Illustration of Thomas Cook\'s first train outing',
    storyImages: [
      {
        url: 'https://images.pexels.com/photos/2152958/pexels-photo-2152958.jpeg',
        alt: 'Thomas Cook\'s first train outing',
        caption: 'Thomas Cook\'s first church outing by train in 1841'
      },
      {
        url: 'https://images.pexels.com/photos/1292998/pexels-photo-1292998.jpeg',
        alt: 'Illustration of early package tourism',
        caption: 'Thomas Cook pioneered modern package tourism'
      }
    ],
    sources: [
      {
        text: 'Cook\'s first temperance excursion with 540 passengers (July 1841): Thomas Cook company historical records'
      },
      {
        text: 'Evolution of Thomas Cook & Son into modern travel agency: Wikipedia entry on Thomas Cook Group'
      }
    ],
    category: 'culture'
  },
];