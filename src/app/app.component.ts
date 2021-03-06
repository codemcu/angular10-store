import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-store';

  products: Array<object> = [
    {
      "ref": "1",
      "name": "VL COURT 2.0",
      "category": "casual",
      "price": "54,95",
      "sizes": ["39", "42", "43", "45"],
      "colors": ["#231F20", "#B40A1B", "#002D6D"]
    },
    {
      "ref": "2",
      "name": "Gazelle",
      "category": "casual",
      "price": "63,45",
      "sizes": ["38", "41", "43", "45"],
      "colors": ["#6D6E71", "#E6E7E8", "#E5F0FF"]
    },
    {
      "ref": "3",
      "name": "SUPERSTAR PRIDE",
      "category": "casual",
      "price": "40,95",
      "sizes": ["39", "42", "43", "45"],
      "colors": ["#231F20", "#FE634E", "#002D6D"]
    },
    {
      "ref": "4",
      "name": "CONTINENTAL 80 VEGAN",
      "category": "casual",
      "price": "110,30",
      "sizes": ["39", "42", "43", "45"],
      "colors": ["#231F20", "#E6E7E8", "#00848C"]
    },
    {
      "ref": "5",
      "name": "QUESTAR FLOW",
      "category": "casual",
      "price": "84,99",
      "sizes": ["39", "42", "44", "45"],
      "colors": ["#460000", "#B40A1B", "#FF6A61"]
    },
    {
      "ref": "6",
      "name": "ULTRABOOST 20",
      "category": "running",
      "price": "53,73",
      "sizes": ["40", "42", "43", "44"],
      "colors": ["#231F20", "#B40A1B", "#002D6D"]
    },
    {
      "ref": "7",
      "name": "SUPERNOVA",
      "category": "running",
      "price": "62,90",
      "sizes": ["39", "42", "43", "45"],
      "colors": ["#E6E7E8", "#B40A1B", "#002D6D"]
    },
    {
      "ref": "8",
      "name": "SOLARGLIDE 3",
      "category": "running",
      "price": "43,25",
      "sizes": ["40", "42", "43", "45"],
      "colors": ["#2F3538", "#DAE4E5", "#EAE6E1"]
    },
    {
      "ref": "9",
      "name": "ADIZERO RC 2.0",
      "category": "running",
      "price": "90,00",
      "sizes": ["39", "42", "43", "45"],
      "colors": ["#CBE724", "#1E3C00", "#00848C"]
    },
    {
      "ref": "10",
      "name": "ENERGYFALCON",
      "category": "running",
      "price": "54,95",
      "sizes": ["39", "42", "43", "45"],
      "colors": ["#231F20", "#B40A1B", "#FF905A"]
    },
    {
      "ref": "11",
      "name": "COPA 20+ CESPED NATURAL SECO",
      "category": "football",
      "price": "48,99",
      "sizes": ["39", "42", "43", "45"],
      "colors": ["#FFD600", "#B40A1B", "#002D6D"]
    },
    {
      "ref": "12",
      "name": "COPA 20.3 INDOOR",
      "category": "football",
      "price": "54,95",
      "sizes": ["40", "42", "44", "46"],
      "colors": ["#E6E7E8", "#B40A1B", "#002D6D"]
    },
    {
      "ref": "13",
      "name": "NEMEZIZ 19.3 MOQUETA",
      "category": "football",
      "price": "82,90",
      "sizes": ["41", "42", "43", "44"],
      "colors": ["#231F20", "#E85668", "#002D6D"]

    },
    {
      "ref": "14",
      "name": "COPA GLORO 20.2 CESPED NATURAL SECO",
      "category": "football",
      "price": "62,90",
      "sizes": ["39", "42", "43", "45"],
      "colors": ["#E8D5D5", "#FEAC92", "#FED876"]
    },
    {
      "ref": "15",
      "name": "PREDATOR MUTATOR 20.1 CESPED NATURAL SECO",
      "category": "football",
      "price": "105,95",
      "sizes": ["41", "42", "44", "46"],
      "colors": ["#FFFFFF", "#B40A1B", "#002D6D"]
    }
  ]

}
