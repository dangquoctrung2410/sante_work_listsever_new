import { MoreOutlined } from '@ant-design/icons';
import { Avatar, List } from 'antd';
import { useEffect } from 'react';
import CreateProject from '../../../components/modalContent/project/CreateProject';
import { getAllProject } from '../../../reducers/slice/projectSlice';
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from '../../../redux/store';

type Props = {};

const Project = (_props: Props) => {
  const dispatch = useAppDispatch();
  const listProject = useAppSelector(
    (state: RootState) => state.project.listProject,
  );

  useEffect(() => {
    dispatch(getAllProject());
  }, []);

  return (
    <>
      <CreateProject />
      <List
        pagination={{ position: 'bottom', align: 'center', defaultCurrent: 1 }}
        size="large"
        itemLayout="horizontal"
        dataSource={listProject}
        renderItem={(item: any) => (
          <List.Item actions={[<MoreOutlined key={1} />]}>
            <List.Item.Meta
              avatar={
                <Avatar
                  shape="square"
                  src={`http://telerad.vn:8080/hub/api/rest/projects/b27d5405-131b-4e9e-98d1-6c21bbf9c2ce/icon?etag=MjgtMTE%3D&dpr=1&size=40`}
                />
              }
              title={<a href="https://ant.design">{item.name}</a>}
              description={item.description}
            />
            <div>content</div>
          </List.Item>
        )}
      />
    </>
  );
};

export default Project;
