import { makeAutoObservable, autorun, runInAction  } from "mobx";

type InitArticle = {
  id?: string;
  title?: string;
  type?: "default" | "microApp";
  contentType?: "markdown" | "richText" | "html" | "plainText";
  content?: string;
  createAt?: Date;
  updateAt?: Date;
};

export default class Article {
  id = "temp";
  title = "无标题";
  type: "default" | "microApp" = "default";
  contentType: "markdown" | "richText" | "html" | "plainText" = "markdown";
  content = "";
  createAt: Date = new Date();
  updateAt: Date = new Date();

  get contentLength() {
    return this.content.length;
  }

  constructor(opt: InitArticle) {
    makeAutoObservable(this);
    runInAction(() => {
      const { id, title, type, contentType, content, createAt, updateAt } = opt;
      id && (this.id = id);
      title && (this.title = title);
      type && (this.type = type);
      contentType && (this.contentType = contentType);
      content && (this.content = content);
      createAt && (this.createAt = createAt);
      updateAt && (this.updateAt = updateAt);
    });
    // 这些字段改变时，更新文章的最后更新时间
    autorun(() => {
      this.title;
      this.type;
      this.contentType;
      this.content;
      runInAction(() => this.updateAt = new Date());
    });
  }
}
