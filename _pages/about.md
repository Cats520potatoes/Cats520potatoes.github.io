---
layout: about
title: about
permalink: /
subtitle: 具身智能与机器人系统研究者，关注从算法设计到真实系统部署的完整闭环。

profile:
  align: right
  image:
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>北京化工大学｜控制科学与工程</p>
    <p>北京朝阳</p>
    <p>18334579906</p>
    <p>18334579906@163.com</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

我目前在北京化工大学攻读控制科学与工程硕士，研究与实践的主线始终围绕真实机器人系统展开。相比只停留在仿真或单点算法验证，我更关注一套方法是否能够完成从建模、控制、联调到实机部署的完整闭环，并在实际环境中稳定工作。

本科阶段，我就读于北京化工大学自动化卓越工程师实验班，之后保研进入具身智能课题组继续从事机器人方向研究。围绕链式机器人、水下机器人、轮式双臂人形机器人以及灵巧手重定向等课题，我逐步形成了一套偏系统化的工作方式：从问题定义和动力学建模出发，推进到控制器设计、接口联调、电控实现，再落到最终的实机验证与任务执行。

我尤其关注复杂接触与动力学约束下的动作生成、人类演示到机器人执行的跨具身重定向，以及算法研究如何真正转化为可运行、可验证、可迭代的机器人系统。这个网站对我来说不只是简历的网页版本，更是一个持续更新的个人研究主页，用来整理项目过程、论文成果和阶段性工程积累。

研究兴趣主要包括：具身智能、机器人动力学与控制、跨具身动作重定向、灵巧操作，以及面向实机部署的系统集成。

<div class="home-focus-grid">
  <div class="home-focus-card">
    <h3>当前关注</h3>
    <p>具身智能、灵巧手重定向、复杂环境下的运动控制，以及可落地的机器人系统实现。</p>
  </div>
  <div class="home-focus-card">
    <h3>工程能力</h3>
    <p>C/C++、Python、ROS2、MATLAB、MuJoCo、嵌入式软硬件联调，以及面向实机的系统集成。</p>
  </div>
  <div class="home-focus-card">
    <h3>这个网站里有什么</h3>
    <p>
      你可以继续查看我的
      <a href="{{ '/projects/' | relative_url }}">项目展示</a>、
      <a href="{{ '/publications/' | relative_url }}">论文成果</a>、
      <a href="{{ '/honors/' | relative_url }}">荣誉与证书</a>
      和
      <a href="{{ '/cv/' | relative_url }}">简历页面</a>。
    </p>
  </div>
</div>

<style>
  .home-focus-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    margin: 1.75rem 0 1rem;
  }

  .home-focus-card {
    padding: 1rem 1.1rem;
    border-radius: 14px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    background: linear-gradient(135deg, rgba(34, 139, 34, 0.08), rgba(15, 23, 42, 0.04));
  }

  .home-focus-card h3 {
    margin-bottom: 0.6rem;
    font-size: 1.05rem;
  }

  .home-focus-card p {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    .home-focus-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
