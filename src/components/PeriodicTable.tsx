import React, { useState } from 'react';
import { Info, Beaker } from 'lucide-react';

interface Element {
  number: number;
  symbol: string;
  name: string;
  category: string;
  atomicMass: string;
}

const elements: Element[] = [
  // Period 1
  { number: 1, symbol: 'H', name: 'Hydrogen', category: 'nonmetal', atomicMass: '1.008' },
  { number: 2, symbol: 'He', name: 'Helium', category: 'noble-gas', atomicMass: '4.003' },
  // Period 2
  { number: 3, symbol: 'Li', name: 'Lithium', category: 'alkali-metal', atomicMass: '6.941' },
  { number: 4, symbol: 'Be', name: 'Beryllium', category: 'alkaline-earth', atomicMass: '9.012' },
  { number: 5, symbol: 'B', name: 'Boron', category: 'metalloid', atomicMass: '10.811' },
  { number: 6, symbol: 'C', name: 'Carbon', category: 'nonmetal', atomicMass: '12.011' },
  { number: 7, symbol: 'N', name: 'Nitrogen', category: 'nonmetal', atomicMass: '14.007' },
  { number: 8, symbol: 'O', name: 'Oxygen', category: 'nonmetal', atomicMass: '15.999' },
  { number: 9, symbol: 'F', name: 'Fluorine', category: 'halogen', atomicMass: '18.998' },
  { number: 10, symbol: 'Ne', name: 'Neon', category: 'noble-gas', atomicMass: '20.180' },
  // Period 3
  { number: 11, symbol: 'Na', name: 'Sodium', category: 'alkali-metal', atomicMass: '22.990' },
  { number: 12, symbol: 'Mg', name: 'Magnesium', category: 'alkaline-earth', atomicMass: '24.305' },
  { number: 13, symbol: 'Al', name: 'Aluminum', category: 'post-transition-metal', atomicMass: '26.982' },
  { number: 14, symbol: 'Si', name: 'Silicon', category: 'metalloid', atomicMass: '28.086' },
  { number: 15, symbol: 'P', name: 'Phosphorus', category: 'nonmetal', atomicMass: '30.974' },
  { number: 16, symbol: 'S', name: 'Sulfur', category: 'nonmetal', atomicMass: '32.065' },
  { number: 17, symbol: 'Cl', name: 'Chlorine', category: 'halogen', atomicMass: '35.453' },
  { number: 18, symbol: 'Ar', name: 'Argon', category: 'noble-gas', atomicMass: '39.948' },
  // Period 4
  { number: 19, symbol: 'K', name: 'Potassium', category: 'alkali-metal', atomicMass: '39.098' },
  { number: 20, symbol: 'Ca', name: 'Calcium', category: 'alkaline-earth', atomicMass: '40.078' },
  { number: 21, symbol: 'Sc', name: 'Scandium', category: 'transition-metal', atomicMass: '44.956' },
  { number: 22, symbol: 'Ti', name: 'Titanium', category: 'transition-metal', atomicMass: '47.867' },
  { number: 23, symbol: 'V', name: 'Vanadium', category: 'transition-metal', atomicMass: '50.942' },
  { number: 24, symbol: 'Cr', name: 'Chromium', category: 'transition-metal', atomicMass: '51.996' },
  { number: 25, symbol: 'Mn', name: 'Manganese', category: 'transition-metal', atomicMass: '54.938' },
  { number: 26, symbol: 'Fe', name: 'Iron', category: 'transition-metal', atomicMass: '55.845' },
  { number: 27, symbol: 'Co', name: 'Cobalt', category: 'transition-metal', atomicMass: '58.933' },
  { number: 28, symbol: 'Ni', name: 'Nickel', category: 'transition-metal', atomicMass: '58.693' },
  { number: 29, symbol: 'Cu', name: 'Copper', category: 'transition-metal', atomicMass: '63.546' },
  { number: 30, symbol: 'Zn', name: 'Zinc', category: 'transition-metal', atomicMass: '65.380' },
  { number: 31, symbol: 'Ga', name: 'Gallium', category: 'post-transition-metal', atomicMass: '69.723' },
  { number: 32, symbol: 'Ge', name: 'Germanium', category: 'metalloid', atomicMass: '72.640' },
  { number: 33, symbol: 'As', name: 'Arsenic', category: 'metalloid', atomicMass: '74.922' },
  { number: 34, symbol: 'Se', name: 'Selenium', category: 'nonmetal', atomicMass: '78.960' },
  { number: 35, symbol: 'Br', name: 'Bromine', category: 'halogen', atomicMass: '79.904' },
  { number: 36, symbol: 'Kr', name: 'Krypton', category: 'noble-gas', atomicMass: '83.798' },
  // Period 5
  { number: 37, symbol: 'Rb', name: 'Rubidium', category: 'alkali-metal', atomicMass: '85.468' },
  { number: 38, symbol: 'Sr', name: 'Strontium', category: 'alkaline-earth', atomicMass: '87.620' },
  { number: 39, symbol: 'Y', name: 'Yttrium', category: 'transition-metal', atomicMass: '88.906' },
  { number: 40, symbol: 'Zr', name: 'Zirconium', category: 'transition-metal', atomicMass: '91.224' },
  { number: 41, symbol: 'Nb', name: 'Niobium', category: 'transition-metal', atomicMass: '92.906' },
  { number: 42, symbol: 'Mo', name: 'Molybdenum', category: 'transition-metal', atomicMass: '95.950' },
  { number: 43, symbol: 'Tc', name: 'Technetium', category: 'transition-metal', atomicMass: '98' },
  { number: 44, symbol: 'Ru', name: 'Ruthenium', category: 'transition-metal', atomicMass: '101.07' },
  { number: 45, symbol: 'Rh', name: 'Rhodium', category: 'transition-metal', atomicMass: '102.91' },
  { number: 46, symbol: 'Pd', name: 'Palladium', category: 'transition-metal', atomicMass: '106.42' },
  { number: 47, symbol: 'Ag', name: 'Silver', category: 'transition-metal', atomicMass: '107.87' },
  { number: 48, symbol: 'Cd', name: 'Cadmium', category: 'transition-metal', atomicMass: '112.41' },
  { number: 49, symbol: 'In', name: 'Indium', category: 'post-transition-metal', atomicMass: '114.82' },
  { number: 50, symbol: 'Sn', name: 'Tin', category: 'post-transition-metal', atomicMass: '118.71' },
  { number: 51, symbol: 'Sb', name: 'Antimony', category: 'metalloid', atomicMass: '121.76' },
  { number: 52, symbol: 'Te', name: 'Tellurium', category: 'metalloid', atomicMass: '127.60' },
  { number: 53, symbol: 'I', name: 'Iodine', category: 'halogen', atomicMass: '126.90' },
  { number: 54, symbol: 'Xe', name: 'Xenon', category: 'noble-gas', atomicMass: '131.29' },
  // Period 6
  { number: 55, symbol: 'Cs', name: 'Cesium', category: 'alkali-metal', atomicMass: '132.91' },
  { number: 56, symbol: 'Ba', name: 'Barium', category: 'alkaline-earth', atomicMass: '137.33' },
  { number: 57, symbol: 'La', name: 'Lanthanum', category: 'lanthanoid', atomicMass: '138.91' },
  { number: 58, symbol: 'Ce', name: 'Cerium', category: 'lanthanoid', atomicMass: '140.12' },
  { number: 59, symbol: 'Pr', name: 'Praseodymium', category: 'lanthanoid', atomicMass: '140.91' },
  { number: 60, symbol: 'Nd', name: 'Neodymium', category: 'lanthanoid', atomicMass: '144.24' },
  { number: 61, symbol: 'Pm', name: 'Promethium', category: 'lanthanoid', atomicMass: '145' },
  { number: 62, symbol: 'Sm', name: 'Samarium', category: 'lanthanoid', atomicMass: '150.36' },
  { number: 63, symbol: 'Eu', name: 'Europium', category: 'lanthanoid', atomicMass: '151.96' },
  { number: 64, symbol: 'Gd', name: 'Gadolinium', category: 'lanthanoid', atomicMass: '157.25' },
  { number: 65, symbol: 'Tb', name: 'Terbium', category: 'lanthanoid', atomicMass: '158.93' },
  { number: 66, symbol: 'Dy', name: 'Dysprosium', category: 'lanthanoid', atomicMass: '162.50' },
  { number: 67, symbol: 'Ho', name: 'Holmium', category: 'lanthanoid', atomicMass: '164.93' },
  { number: 68, symbol: 'Er', name: 'Erbium', category: 'lanthanoid', atomicMass: '167.26' },
  { number: 69, symbol: 'Tm', name: 'Thulium', category: 'lanthanoid', atomicMass: '168.93' },
  { number: 70, symbol: 'Yb', name: 'Ytterbium', category: 'lanthanoid', atomicMass: '173.05' },
  { number: 71, symbol: 'Lu', name: 'Lutetium', category: 'lanthanoid', atomicMass: '174.97' },
  { number: 72, symbol: 'Hf', name: 'Hafnium', category: 'transition-metal', atomicMass: '178.49' },
  { number: 73, symbol: 'Ta', name: 'Tantalum', category: 'transition-metal', atomicMass: '180.95' },
  { number: 74, symbol: 'W', name: 'Tungsten', category: 'transition-metal', atomicMass: '183.84' },
  { number: 75, symbol: 'Re', name: 'Rhenium', category: 'transition-metal', atomicMass: '186.21' },
  { number: 76, symbol: 'Os', name: 'Osmium', category: 'transition-metal', atomicMass: '190.23' },
  { number: 77, symbol: 'Ir', name: 'Iridium', category: 'transition-metal', atomicMass: '192.22' },
  { number: 78, symbol: 'Pt', name: 'Platinum', category: 'transition-metal', atomicMass: '195.08' },
  { number: 79, symbol: 'Au', name: 'Gold', category: 'transition-metal', atomicMass: '196.97' },
  { number: 80, symbol: 'Hg', name: 'Mercury', category: 'transition-metal', atomicMass: '200.59' },
  { number: 81, symbol: 'Tl', name: 'Thallium', category: 'post-transition-metal', atomicMass: '204.38' },
  { number: 82, symbol: 'Pb', name: 'Lead', category: 'post-transition-metal', atomicMass: '207.2' },
  { number: 83, symbol: 'Bi', name: 'Bismuth', category: 'post-transition-metal', atomicMass: '208.98' },
  { number: 84, symbol: 'Po', name: 'Polonium', category: 'post-transition-metal', atomicMass: '209' },
  { number: 85, symbol: 'At', name: 'Astatine', category: 'halogen', atomicMass: '210' },
  { number: 86, symbol: 'Rn', name: 'Radon', category: 'noble-gas', atomicMass: '222' },
  // Period 7
  { number: 87, symbol: 'Fr', name: 'Francium', category: 'alkali-metal', atomicMass: '223' },
  { number: 88, symbol: 'Ra', name: 'Radium', category: 'alkaline-earth', atomicMass: '226' },
  { number: 89, symbol: 'Ac', name: 'Actinium', category: 'actinoid', atomicMass: '227' },
  { number: 90, symbol: 'Th', name: 'Thorium', category: 'actinoid', atomicMass: '232.04' },
  { number: 91, symbol: 'Pa', name: 'Protactinium', category: 'actinoid', atomicMass: '231.04' },
  { number: 92, symbol: 'U', name: 'Uranium', category: 'actinoid', atomicMass: '238.03' },
  { number: 93, symbol: 'Np', name: 'Neptunium', category: 'actinoid', atomicMass: '237' },
  { number: 94, symbol: 'Pu', name: 'Plutonium', category: 'actinoid', atomicMass: '244' },
  { number: 95, symbol: 'Am', name: 'Americium', category: 'actinoid', atomicMass: '243' },
  { number: 96, symbol: 'Cm', name: 'Curium', category: 'actinoid', atomicMass: '247' },
  { number: 97, symbol: 'Bk', name: 'Berkelium', category: 'actinoid', atomicMass: '247' },
  { number: 98, symbol: 'Cf', name: 'Californium', category: 'actinoid', atomicMass: '251' },
  { number: 99, symbol: 'Es', name: 'Einsteinium', category: 'actinoid', atomicMass: '252' },
  { number: 100, symbol: 'Fm', name: 'Fermium', category: 'actinoid', atomicMass: '257' },
  { number: 101, symbol: 'Md', name: 'Mendelevium', category: 'actinoid', atomicMass: '258' },
  { number: 102, symbol: 'No', name: 'Nobelium', category: 'actinoid', atomicMass: '259' },
  { number: 103, symbol: 'Lr', name: 'Lawrencium', category: 'actinoid', atomicMass: '262' },
  { number: 104, symbol: 'Rf', name: 'Rutherfordium', category: 'transition-metal', atomicMass: '267' },
  { number: 105, symbol: 'Db', name: 'Dubnium', category: 'transition-metal', atomicMass: '268' },
  { number: 106, symbol: 'Sg', name: 'Seaborgium', category: 'transition-metal', atomicMass: '269' },
  { number: 107, symbol: 'Bh', name: 'Bohrium', category: 'transition-metal', atomicMass: '270' },
  { number: 108, symbol: 'Hs', name: 'Hassium', category: 'transition-metal', atomicMass: '269' },
  { number: 109, symbol: 'Mt', name: 'Meitnerium', category: 'transition-metal', atomicMass: '278' },
  { number: 110, symbol: 'Ds', name: 'Darmstadtium', category: 'transition-metal', atomicMass: '281' },
  { number: 111, symbol: 'Rg', name: 'Roentgenium', category: 'transition-metal', atomicMass: '282' },
  { number: 112, symbol: 'Cn', name: 'Copernicium', category: 'transition-metal', atomicMass: '285' },
  { number: 113, symbol: 'Nh', name: 'Nihonium', category: 'post-transition-metal', atomicMass: '286' },
  { number: 114, symbol: 'Fl', name: 'Flerovium', category: 'post-transition-metal', atomicMass: '289' },
  { number: 115, symbol: 'Mc', name: 'Moscovium', category: 'post-transition-metal', atomicMass: '290' },
  { number: 116, symbol: 'Lv', name: 'Livermorium', category: 'post-transition-metal', atomicMass: '293' },
  { number: 117, symbol: 'Ts', name: 'Tennessine', category: 'halogen', atomicMass: '294' },
  { number: 118, symbol: 'Og', name: 'Oganesson', category: 'noble-gas', atomicMass: '294' }
];

const categoryColors: Record<string, string> = {
  'nonmetal': 'bg-yellow-100/90 hover:bg-yellow-200',
  'noble-gas': 'bg-purple-100/90 hover:bg-purple-200',
  'alkali-metal': 'bg-red-100/90 hover:bg-red-200',
  'alkaline-earth': 'bg-orange-100/90 hover:bg-orange-200',
  'metalloid': 'bg-green-100/90 hover:bg-green-200',
  'halogen': 'bg-blue-100/90 hover:bg-blue-200',
  'transition-metal': 'bg-pink-100/90 hover:bg-pink-200',
  'post-transition-metal': 'bg-indigo-100/90 hover:bg-indigo-200',
  'lanthanoid': 'bg-teal-100/90 hover:bg-teal-200',
  'actinoid': 'bg-cyan-100/90 hover:bg-cyan-200'
};

const ElementCard: React.FC<{ element: Element; onClick: () => void; index: number }> = ({ element, onClick, index }) => (
  <div
    className={`element-card p-3 ${categoryColors[element.category]} cursor-pointer transition-all duration-300 rounded-lg shadow-sm hover:shadow-xl backdrop-blur-sm`}
    onClick={onClick}
    style={{ animationDelay: `${index * 20}ms` }}
  >
    <div className="text-xs text-gray-600">{element.number}</div>
    <div className="text-2xl font-bold">{element.symbol}</div>
    <div className="text-xs truncate">{element.name}</div>
  </div>
);

const ElementDetails: React.FC<{ element: Element; onClose: () => void }> = ({ element, onClose }) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 modal-overlay backdrop-blur-sm">
    <div className="bg-white/95 rounded-lg p-6 max-w-md w-full shadow-2xl modal-content backdrop-blur-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-3xl font-bold">{element.name}</h2>
          <p className="text-gray-600">Element {element.number}</p>
        </div>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          ×
        </button>
      </div>
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <span className="font-semibold">Symbol:</span>
          <span>{element.symbol}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-semibold">Atomic Mass:</span>
          <span>{element.atomicMass} u</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-semibold">Category:</span>
          <span className="capitalize">{element.category.replace('-', ' ')}</span>
        </div>
      </div>
    </div>
  </div>
);

const PeriodicTable: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="bg-pattern absolute inset-0 opacity-50"></div>
      <div className="relative p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-3 mb-8">
            <div className="flex items-center bg-white/80 rounded-full px-4 py-2 shadow-lg backdrop-blur-sm">
              <Beaker className="w-6 h-6 text-blue-500 mr-2" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Interactive Periodic Table
              </h1>
            </div>
          </div>
          
          <div className="grid grid-cols-5 gap-3 md:grid-cols-18 bg-white/40 p-6 rounded-2xl shadow-lg backdrop-blur-sm">
            {elements.map((element, index) => (
              <ElementCard
                key={element.number}
                element={element}
                onClick={() => setSelectedElement(element)}
                index={index}
              />
            ))}
          </div>

          {selectedElement && (
            <ElementDetails
              element={selectedElement}
              onClose={() => setSelectedElement(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PeriodicTable;