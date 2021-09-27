import { useRouter } from 'next/router';

import { Wrapper, FirstCol, LastCol } from './styled';
import NavigationMenu from '../menu';

import Title from '../../components/title';
import useNavigation from '../menu/service';

export default function NavBar() {
  const { pathname } = useRouter();
  const { navTitle } = useNavigation();
  // TODO: Create Observer
  const title = navTitle;

  return (
    <Wrapper>
      <FirstCol>
        <NavigationMenu />
      </FirstCol>

      <LastCol>
        <Title>{title}</Title>
      </LastCol>
    </Wrapper>
  );
}
