import { MissionService } from "./mission.service";
import { of } from "rxjs";
import { ListLaunchesComponent } from "../../components/list-launches/list-launches.component";

describe('Testing for Mission Service on called methods', () => {
  let service: MissionService;
  let listLaunches: ListLaunchesComponent;
  beforeEach(() => {
    const spyHttpMission = jasmine.createSpyObj('HttpClient', {post: of({}), get: of({})})
    service = new MissionService(spyHttpMission);
    listLaunches = new ListLaunchesComponent(service);
  });

  it('test service of rockets called ngOnInit method', () => {
    listLaunches = new ListLaunchesComponent(service);
    listLaunches.ngOnInit()

  });

  it('test service of rockets called _missionListNameAll method', () => {
    listLaunches = new ListLaunchesComponent(service);
    listLaunches._missionListNameAll()

  });

  it('test service of rockets called getData method', () => {
    service.getDataLaunch()
  });

})
