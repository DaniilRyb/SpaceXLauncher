import { RocketsService } from "./rockets.service";
import { FalconHeavyComponent } from "../../components/rockets-list/falcon-heavy/falcon-heavy.component";
import { of } from "rxjs";
import { Falcon1Component } from "../../components/rockets-list/falcon1/falcon1.component";
import { Falcon9Component } from "../../components/rockets-list/falcon9/falcon9.component";
import { StarshipComponent } from "../../components/rockets-list/starship/starship.component";


describe("testing function called from Components", () => {

  let rocketService: RocketsService
  let componentFalcon1: Falcon1Component
  let componentFalcon9: Falcon9Component
  let componentFalconHeavy: FalconHeavyComponent
  let componentStarship: StarshipComponent

  beforeEach(() => {

    const spyHttpMission = jasmine.createSpyObj('HttpClient', {post: of({}), get: of({})})

    rocketService = new RocketsService(spyHttpMission);
    componentFalcon1 = new Falcon1Component(rocketService)
    componentFalcon9 = new Falcon9Component(rocketService)
    componentFalconHeavy = new FalconHeavyComponent(rocketService);
    componentStarship = new StarshipComponent(rocketService)

  })

  it('should ', function () {
    rocketService.getDataRockets()
  });


  it('should ', function () {
    componentFalcon1 = new Falcon1Component(rocketService);
    componentFalcon1.ngOnInit()

  });

  it('should ', function () {
    componentFalcon9 = new Falcon9Component(rocketService);
    componentFalcon9.ngOnInit()
  });

  it('should ', function () {
    componentFalconHeavy = new FalconHeavyComponent(rocketService);
    componentFalconHeavy.ngOnInit()
  });


  it('should ', function () {
    componentStarship = new StarshipComponent(rocketService);
    componentStarship.ngOnInit()
  });

})
