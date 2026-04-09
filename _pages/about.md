---
layout: about
title: about
permalink: /
subtitle: 具身智能与机器人系统研究者，关注从算法设计到真实系统部署的完整闭环。

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

<div class="home-top-grid">
  <div class="home-top-main">
    <div class="home-hero-panel">
      <p class="home-hero-kicker">北京化工大学控制科学与工程硕士｜具身智能与机器人系统方向</p>
      <h2>我更关心的不是算法是否“能跑”，而是它能否真正部署到机器人上，并在真实环境里稳定工作。</h2>
      <p class="home-hero-lead">
        围绕灵巧手重定向、机器人动力学、运动控制和嵌入式系统，我持续在做从建模仿真、算法实现到电控联调和实机验证的完整链路工作。
      </p>
      <div class="home-keyword-row">
        <span>具身智能</span>
        <span>灵巧手重定向</span>
        <span>机器人动力学</span>
        <span>运动控制</span>
        <span>实机部署</span>
      </div>
      <div class="home-action-row">
        <a href="{{ '/projects/' | relative_url }}">看项目展示</a>
        <a href="{{ '/publications/' | relative_url }}">看论文成果</a>
        <a href="{{ '/honors/' | relative_url }}">看荣誉证书</a>
        <a href="{{ '/cv/' | relative_url }}">看完整简历</a>
      </div>
    </div>
  </div>

  <aside class="home-sidebar">
    <div class="home-portrait-card">
      <img src="{{ '/assets/img/prof_pic.jpg' | relative_url }}" alt="何原" />
    </div>

    <div class="home-profile-card">
      <div class="profile-info-badge">M.S. Candidate · Embodied AI & Robotics</div>
      <div class="profile-info-list">
        <div class="profile-info-item">
          <span class="profile-info-label">学校</span>
          <span class="profile-info-value">北京化工大学</span>
        </div>
        <div class="profile-info-item">
          <span class="profile-info-label">方向</span>
          <span class="profile-info-value">控制科学与工程</span>
        </div>
        <div class="profile-info-item">
          <span class="profile-info-label">地址</span>
          <span class="profile-info-value">北京朝阳</span>
        </div>
        <div class="profile-info-item">
          <span class="profile-info-label">电话</span>
          <span class="profile-info-value">18334579906</span>
        </div>
        <div class="profile-info-item">
          <span class="profile-info-label">邮箱</span>
          <a class="profile-info-value" href="mailto:18334579906@163.com">18334579906@163.com</a>
        </div>
        <div class="profile-info-item">
          <span class="profile-info-label">GitHub</span>
          <a class="profile-info-value" href="https://github.com/Cats520potatoes">Cats520potatoes</a>
        </div>
      </div>
      <div class="profile-link-row">
        <a href="mailto:18334579906@163.com">Email</a>
        <a href="https://github.com/Cats520potatoes">GitHub</a>
        <a href="{{ '/cv/' | relative_url }}">CV</a>
      </div>
    </div>
  </aside>
</div>

<div class="home-featured-grid">
  <article class="home-featured-card home-featured-accent">
    <span class="home-featured-type">Representative Paper</span>
    <h3>代表论文</h3>
    <p class="home-featured-title">
      Stability Enhancement in Variable Morphing Multi-body AUVs for Underwater Structure Maintenance
    </p>
    <p>
      该工作发表于 IROS 2025，聚焦可变构型多体 AUV 的稳定性增强，能够直接体现我在水下机器人动力学建模与控制方向上的研究积累。
    </p>
    <div class="home-featured-links">
      <a href="https://doi.org/10.1109/IROS60139.2025.11247455">查看 DOI</a>
      <a href="{{ '/publications/' | relative_url }}">浏览全部论文</a>
    </div>
  </article>

  <article class="home-featured-card">
    <span class="home-featured-type">Representative Project</span>
    <h3>代表项目</h3>
    <p class="home-featured-title">面向真实部署的灵巧手重定向与 Tea Box 抓取任务</p>
    <p>
      这一方向围绕“视频提取 - 仿真重定向 - 实物部署”形成完整链路，并结合 IK 求解与具体抓取任务，集中体现我在跨具身动作映射和系统落地上的能力。
    </p>
    <div class="home-featured-links">
      <a href="{{ '/projects/' | relative_url }}#{{ '具身智能与操作演示' | slugify }}">查看项目视频</a>
      <a href="{{ '/projects/' | relative_url }}">浏览全部项目</a>
    </div>
  </article>
</div>

<div class="home-metric-grid">
  <div class="home-metric-card">
    <span class="home-metric-label">学业表现</span>
    <strong>研究生专业排名 1/65</strong>
    <p>本科毕业于自动化卓越工程师实验班，持续保持稳定的课程与科研输出。</p>
  </div>
  <div class="home-metric-card">
    <span class="home-metric-label">论文成果</span>
    <strong>IROS / RA-L / CIAC / ISoIRS</strong>
    <p>参与多篇机器人方向论文，覆盖会议、期刊和多体系统与运动控制相关研究。</p>
  </div>
  <div class="home-metric-card">
    <span class="home-metric-label">竞赛成绩</span>
    <strong>RoboCup 国一 / 电赛国二 / 蓝桥杯一等奖</strong>
    <p>竞赛方向集中在机器人系统、嵌入式控制和原型实现，结果稳定且跨度较大。</p>
  </div>
  <div class="home-metric-card">
    <span class="home-metric-label">实机平台</span>
    <strong>灵巧手、链式机器人、水下机器人、轮式双臂</strong>
    <p>项目不局限于单一平台，偏向真实系统中的建模、控制、部署和联调。</p>
  </div>
</div>

## 研究与实践

我目前在北京化工大学攻读控制科学与工程硕士，研究与实践的主线始终围绕真实机器人系统展开。相比只停留在仿真或单点算法验证，我更关注一套方法是否能够完成从建模、控制、联调到实机部署的完整闭环，并在实际环境中稳定工作。

本科阶段，我就读于北京化工大学自动化卓越工程师实验班，之后保研进入具身智能课题组继续从事机器人方向研究。围绕链式机器人、水下机器人、轮式双臂人形机器人以及灵巧手重定向等课题，我逐步形成了一套偏系统化的工作方式：从问题定义和动力学建模出发，推进到控制器设计、接口联调、电控实现，再落到最终的实机验证与任务执行。

我尤其关注复杂接触与动力学约束下的动作生成、人类演示到机器人执行的跨具身重定向，以及算法研究如何真正转化为可运行、可验证、可迭代的机器人系统。这个网站对我来说不只是简历的网页版本，更是一个持续更新的个人研究主页，用来整理项目过程、论文成果和阶段性工程积累。

<div class="home-focus-grid">
  <div class="home-focus-card">
    <h3>当前研究主线</h3>
    <p>具身智能、跨具身动作重定向、灵巧操作、机器人动力学与复杂环境中的运动控制。</p>
  </div>
  <div class="home-focus-card">
    <h3>平台与项目经验</h3>
    <p>覆盖灵巧手、机械臂、链式机器人、水下机器人、轮式双臂人形机器人，以及竞赛类嵌入式平台。</p>
  </div>
  <div class="home-focus-card">
    <h3>工程实现能力</h3>
    <p>C/C++、Python、ROS2、MATLAB、MuJoCo、嵌入式软硬件联调，以及面向实机的系统集成与调试。</p>
  </div>
</div>

## 这个网站里有什么

如果你希望快速判断我的能力边界，建议先看 [项目展示]({{ '/projects/' | relative_url }})，那里集中放了最能反映系统能力的视频和项目说明；再看 [论文成果]({{ '/publications/' | relative_url }}) 和 [荣誉与证书]({{ '/honors/' | relative_url }})；如果你需要一页式概览，可以直接查看 [简历页面]({{ '/cv/' | relative_url }})。

<style>
  .home-top-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.65fr) minmax(300px, 0.9fr);
    gap: 1.6rem;
    align-items: start;
    margin: 0.35rem 0 1.6rem;
  }

  .home-top-main,
  .home-sidebar {
    min-width: 0;
  }

  .home-sidebar {
    display: grid;
    gap: 1rem;
  }

  .home-portrait-card,
  .home-profile-card,
  .home-featured-card,
  .home-metric-card,
  .home-focus-card {
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0 14px 32px rgba(15, 23, 42, 0.06);
  }

  .home-portrait-card {
    overflow: hidden;
    border-radius: 24px;
  }

  .home-portrait-card img {
    display: block;
    width: 100%;
    height: auto;
  }

  .home-profile-card {
    padding: 1.05rem 1.1rem 1.15rem;
    border-radius: 22px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(241, 248, 243, 0.98));
  }

  .profile-info-badge {
    display: inline-flex;
    align-items: center;
    margin-bottom: 0.95rem;
    padding: 0.45rem 0.85rem;
    border-radius: 999px;
    background: rgba(47, 125, 50, 0.12);
    color: #1f5e26;
    font-size: 0.83rem;
    font-weight: 700;
    letter-spacing: 0.03em;
  }

  .profile-info-list {
    display: grid;
    gap: 0.7rem;
  }

  .profile-info-item {
    display: grid;
    grid-template-columns: 48px 1fr;
    gap: 0.8rem;
    align-items: start;
  }

  .profile-info-label {
    color: #6c757d;
    font-size: 0.86rem;
  }

  .profile-info-value {
    color: inherit;
    font-size: 0.95rem;
    line-height: 1.55;
    word-break: break-word;
    text-decoration: none;
  }

  .profile-link-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
    margin-top: 1rem;
  }

  .profile-link-row a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.45rem 0.8rem;
    border-radius: 999px;
    background: rgba(47, 125, 50, 0.1);
    color: #1f5e26;
    text-decoration: none;
    font-weight: 600;
  }

  .home-hero-panel {
    padding: 1.45rem 1.55rem;
    border-radius: 24px;
    background: linear-gradient(135deg, rgba(34, 139, 34, 0.12), rgba(226, 238, 231, 0.75), rgba(15, 23, 42, 0.05));
    border: 1px solid rgba(0, 0, 0, 0.08);
  }

  .home-hero-kicker {
    margin-bottom: 0.7rem;
    font-size: 0.95rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #2f7d32;
    font-weight: 700;
  }

  .home-hero-panel h2 {
    max-width: 13em;
    margin-bottom: 0.85rem;
    font-size: 2.2rem;
    line-height: 1.28;
  }

  .home-hero-lead {
    max-width: 48rem;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    line-height: 1.75;
  }

  .home-keyword-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
    margin: 0 0 1.1rem;
  }

  .home-keyword-row span {
    display: inline-flex;
    align-items: center;
    padding: 0.4rem 0.8rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.72);
    color: #35563b;
    font-size: 0.88rem;
    font-weight: 600;
  }

  .home-action-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  .home-action-row a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.6rem 1rem;
    border-radius: 999px;
    background: rgba(47, 125, 50, 0.12);
    color: #1f5e26;
    text-decoration: none;
    font-weight: 700;
  }

  .home-featured-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.2rem;
    margin: 0 0 1.4rem;
  }

  .home-featured-card {
    padding: 1.25rem 1.3rem 1.2rem;
    border-radius: 24px;
  }

  .home-featured-accent {
    background: linear-gradient(135deg, rgba(47, 125, 50, 0.12), rgba(255, 255, 255, 0.98));
  }

  .home-featured-type {
    display: inline-flex;
    margin-bottom: 0.75rem;
    padding: 0.35rem 0.7rem;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.05);
    color: #495057;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .home-featured-card h3 {
    margin-bottom: 0.45rem;
    font-size: 1.15rem;
  }

  .home-featured-title {
    margin-bottom: 0.7rem;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.45;
  }

  .home-featured-card p:last-of-type {
    margin-bottom: 0;
  }

  .home-featured-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-top: 0.95rem;
  }

  .home-featured-links a {
    color: #1f5e26;
    text-decoration: none;
    font-weight: 700;
  }

  .home-metric-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
    margin: 0 0 2rem;
  }

  .home-metric-card {
    padding: 1.1rem 1.1rem 1rem;
    border-radius: 20px;
  }

  .home-metric-label {
    display: block;
    margin-bottom: 0.45rem;
    color: #6c757d;
    font-size: 0.84rem;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }

  .home-metric-card strong {
    display: block;
    margin-bottom: 0.6rem;
    font-size: 1.05rem;
    line-height: 1.5;
  }

  .home-metric-card p {
    margin-bottom: 0;
  }

  .home-focus-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    margin: 1.5rem 0 1rem;
  }

  .home-focus-card {
    padding: 1.1rem 1.15rem;
    border-radius: 20px;
    background: linear-gradient(135deg, rgba(34, 139, 34, 0.08), rgba(15, 23, 42, 0.04));
  }

  .home-focus-card h3 {
    margin-bottom: 0.65rem;
    font-size: 1.05rem;
  }

  .home-focus-card p {
    margin-bottom: 0;
  }

  @media (max-width: 992px) {
    .home-top-grid,
    .home-featured-grid,
    .home-metric-grid,
    .home-focus-grid {
      grid-template-columns: 1fr;
    }

    .home-hero-panel h2 {
      max-width: none;
      font-size: 1.7rem;
    }
  }

  @media (max-width: 768px) {
    .home-hero-panel {
      padding: 1.15rem 1.1rem;
    }

    .home-featured-card,
    .home-metric-card,
    .home-focus-card,
    .home-profile-card {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
</style>
