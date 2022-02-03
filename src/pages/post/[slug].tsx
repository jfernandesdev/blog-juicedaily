import React from 'react';

import {
  Container,
  Content,
  Image,
  Wrapper,
  Title,
  Text,
  WrapperCards,
  Banner
} from './styles';

import { TagCategory } from '../../components/TagCategory';
import { Author } from '../../components/Author';
import { Card } from '../../components/Card';

const Post: React.FC = () => {
  return (
    <Container>
      <Image image="/avocado.jpg" />
      <Content>
        <Title>Simple Juice Recipes to boost your immune system</Title>

        <Wrapper>
          <Author
            image="https://randomuser.me/api/portraits/women/3.jpg"
            name="Silvia Araújo"
          />

          <TagCategory category="Fruit" color="#40B2C9" withSeparator/>

          <span>Jan 22, 2022</span>
        </Wrapper>

        <Text>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            consectetur, risus id rhoncus venenatis, lorem erat tristique arcu,
            et consectetur orci ex a justo. Pellentesque semper bibendum erat
            nec convallis. Proin tristique nec enim et blandit. Proin blandit
            tempus dictum. Praesent quis erat eu arcu volutpat venenatis maximus
            ullamcorper tellus. Nam id dapibus est, in vulputate ante.
            Vestibulum nec nunc dapibus, tempus tellus varius, pellentesque
            felis. Nam rhoncus gravida mollis. Etiam suscipit arcu ipsum, vel
            bibendum ligula eleifend eget. Morbi tempus augue in laoreet
            tristique. Aenean aliquet lacus sit amet placerat feugiat. Praesent
            eu risus tempus, efficitur metus non, pretium erat. Suspendisse non
            nisi justo.
          </p>

          <p>
            Proin placerat hendrerit neque mattis maximus. Donec interdum
            accumsan libero eget tempor. Aenean aliquet tortor dui, in viverra
            sapien luctus vitae. Donec ullamcorper posuere aliquam. Nam vel
            facilisis ex. Morbi non euismod ipsum. Pellentesque laoreet maximus
            arcu, non laoreet purus pretium a. Nam posuere sit amet est
            dignissim venenatis. Ut pulvinar vehicula magna. Ut a semper massa.
            Cras pretium gravida nisi commodo efficitur. Cras ullamcorper arcu
            nisl, eu vulputate turpis lacinia vitae. Praesent nec rutrum libero,
            eget euismod justo. Nullam a nisi vel tellus venenatis aliquet. Cras
            eleifend bibendum auctor. Sed neque massa, fringilla id purus id,
            molestie finibus purus.
          </p>

          <p>
            Morbi at luctus massa. Fusce ipsum urna, blandit at augue sit amet,
            pellentesque condimentum nibh. Mauris ac condimentum sapien. Ut
            rhoncus tortor viverra nisi sodales congue. Aliquam rhoncus massa at
            mauris sollicitudin, ut varius purus imperdiet. Pellentesque libero
            nibh, porttitor malesuada mauris ut, hendrerit mattis orci. In
            pretium erat ut elementum vestibulum. Quisque nec eros non tellus
            elementum ornare nec eget justo. Proin finibus libero eu libero
            mattis, et hendrerit mauris rutrum. Sed mollis turpis vel magna
            vestibulum varius. Cras enim urna, eleifend vitae tempus eget,
            vestibulum quis orci. Phasellus id lorem commodo ipsum sagittis
            pellentesque. Nulla sodales magna et mi cursus, non lacinia ipsum
            condimentum. Nunc eu sapien lacinia, sagittis libero eget,
            pellentesque arcu.
          </p>

          <p>
            Duis molestie lacus vel lorem fermentum, in posuere magna
            consectetur. Ut posuere lorem efficitur orci molestie volutpat. In
            id nibh fringilla, egestas libero id, tincidunt elit. In feugiat
            ultricies blandit. Quisque elementum, est ut faucibus placerat,
            massa nisi faucibus lacus, sit amet ornare quam ligula quis felis.
            Aliquam nec nunc diam. Morbi vitae tristique neque, et semper nunc.
          </p>

          <p>
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Fusce volutpat nulla ac nulla maximus
            ultricies. Donec mattis est vulputate, aliquet diam et, consectetur
            elit. Cras at condimentum mi, gravida pulvinar nulla. Quisque
            vehicula dui nisi, vel gravida dolor auctor nec. Phasellus vitae
            suscipit justo. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Nam id lectus vel arcu
            auctor elementum. Aliquam condimentum ultricies orci, fermentum
            congue felis semper sit amet. Nam et vestibulum enim.
          </p>
        </Text>

        <Banner image="/avocado.jpg">
          <h4>
            Simple Orange <br />
            Juice Recipe
          </h4>
        </Banner>

        <h3>Posts relacionados</h3>
        <WrapperCards>
          {Array.from({ length: 3 }).map((_, index) => (
            <Card key={index} type="medium" hiddenAuthor />
          ))}
        </WrapperCards>
      </Content>
    </Container>
  );
};

export default Post;
