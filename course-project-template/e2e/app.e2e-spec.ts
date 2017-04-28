import { CourseProjectTemplatePage } from './app.po';

describe('course-project-template App', () => {
  let page: CourseProjectTemplatePage;

  beforeEach(() => {
    page = new CourseProjectTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
