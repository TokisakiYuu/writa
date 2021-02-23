import React, { FC } from "react";
import { makeAutoObservable } from "mobx";
import { observer, useLocalObservable } from "mobx-react-lite";
import styled from "styled-components/macro";

const PageHeader: FC<{}> = () => {
  const store = useLocalObservable(() => ({
    name: "张三",
    age: 20,
    friends: ["李四", "王五"],
    nextAge() {
      store.age++;
    }
  }));
  return (
    <Box>
      <span>我是page header</span>
      <p>姓名: {store.name}</p>
      <p>年龄: {store.age}</p>
      <p>朋友: {store.friends.join(", ")}</p>
      <button onClick={store.nextAge}>改变年龄</button>
      <button onClick={() => {
        store.friends.push("赵六");
      }}>增加朋友</button>
    </Box>
  );
};

const Box = styled.header`
  background-color: yellow;
`;

export default observer(PageHeader);
