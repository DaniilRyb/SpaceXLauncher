import { MissionService } from "./mission.service";
import { of } from "rxjs";
import { ListLaunchesComponent } from "../components/list-launches/list-launches.component";

describe('CommentsComponent', () => {
  let service: MissionService;
  let listLaunches: ListLaunchesComponent;

  beforeEach(() => {
    const spyHttpMission = jasmine.createSpyObj('HttpClient', {post: of({}), get: of({})})
    service = new MissionService(spyHttpMission);
    listLaunches = new ListLaunchesComponent(service);
  })

  it('test service in rocket ', function () {
    listLaunches.ngOnInit()
    listLaunches._missionListNameAll()

  });

})
