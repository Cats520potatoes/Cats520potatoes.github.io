---
layout: page
title: 项目展示
permalink: /projects/
description: 这里集中展示我在具身智能、机器人控制与嵌入式系统方向的部分代表性项目视频。
nav: true
nav_order: 3
---

{% assign total_videos = 0 %}
{% for section in site.data.projects_showcase.sections %}
  {% assign total_videos = total_videos | plus: section.items.size %}
{% endfor %}

<div class="projects-page">
  <p class="showcase-intro">
    这个页面不是单纯的视频堆叠，而是按照研究与工程方向整理过的一组项目样本。它覆盖了我在具身智能、机器人动力学、运动控制、逆运动学求解以及嵌入式系统实现方面的代表性工作，尽量让访问者能快速看出我“做过什么、怎么做的、做到什么程度”。
  </p>

  <div class="showcase-guide">
    <strong>建议浏览路径：</strong>
    如果你第一次访问这个页面，可以先看“具身智能与操作演示”中的灵巧手重定向和抓取任务，再看“运动学与算法验证”里的逆解模块，最后浏览“水下与链式机器人”以及“嵌入式与竞赛原型”，这样更容易理解我从算法到系统实现的完整工作链路。
  </div>

  <div class="showcase-summary">
    <div class="showcase-metric">
      <span class="showcase-number">{{ total_videos }}</span>
      <span class="showcase-label">已整理视频</span>
    </div>
    <div class="showcase-metric">
      <span class="showcase-number">{{ site.data.projects_showcase.sections.size }}</span>
      <span class="showcase-label">项目主题</span>
    </div>
    <div class="showcase-metric">
      <span class="showcase-number">2022-2025</span>
      <span class="showcase-label">覆盖阶段</span>
    </div>
  </div>

  <div class="showcase-nav">
    {% for section in site.data.projects_showcase.sections %}
      <a href="#{{ section.title | slugify }}">{{ section.title }}</a>
    {% endfor %}
  </div>

  <div class="showcase-overview">
    <div class="row justify-content-center mb-0">
      <div class="col-lg-9">
        {% include figure.liquid
          path="/assets/img/retargeting-overview.png"
          class="img-fluid rounded z-depth-1"
          alt="跨具身重定向流程示意"
          caption="跨具身重定向的一页思路图，用来说明从演示到机器人执行的整体链路。"
          loading="eager"
        %}
      </div>
    </div>
  </div>

  {% for section in site.data.projects_showcase.sections %}
    <section class="showcase-section" id="{{ section.title | slugify }}">
      <div class="showcase-section-panel">
        <div class="showcase-section-heading">
          <span class="showcase-section-topic">{{ section.topic }}</span>
          <h2 class="mb-1">{{ section.title }}</h2>
          <p class="text-muted mb-0">{{ section.description }}</p>
        </div>
        <div class="showcase-section-aside">
          <div class="showcase-section-focus">
            <span class="showcase-section-label">研究焦点</span>
            <p>{{ section.focus }}</p>
          </div>
          <div class="showcase-section-keywords">
            {% for keyword in section.keywords %}
              <span>{{ keyword }}</span>
            {% endfor %}
          </div>
          <span class="showcase-section-count">{{ section.items.size }} 个项目视频</span>
        </div>
      </div>

      <div class="showcase-project-list">
        {% for item in section.items %}
          <article class="showcase-project-card">
            <div class="showcase-media">
              <div class="showcase-video">
                {% include video.liquid path=item.path class="img-fluid rounded z-depth-1" controls=true %}
              </div>
            </div>
            <div class="showcase-content">
              <div class="showcase-card-top">
                <span class="showcase-role-chip">{{ item.role }}</span>
                <div class="showcase-chip-row">
                  {% for tag in item.tags %}
                    <span class="showcase-chip">{{ tag }}</span>
                  {% endfor %}
                </div>
              </div>
              <h3 class="showcase-project-title">{{ item.title }}</h3>
              <p class="showcase-project-summary">{{ item.summary }}</p>
              {% if item.details %}
                <div class="showcase-detail-block">
                  <h4 class="showcase-detail-title">项目说明</h4>
                  <ul class="showcase-detail-list">
                    {% for detail in item.details %}
                      <li>{{ detail }}</li>
                    {% endfor %}
                  </ul>
                </div>
              {% endif %}
            </div>
          </article>
        {% endfor %}
      </div>
    </section>
  {% endfor %}
</div>

<style>
  .projects-page {
    --projects-surface: color-mix(in srgb, var(--global-card-bg-color) 96%, white 4%);
    --projects-surface-soft: color-mix(in srgb, var(--global-card-bg-color) 90%, var(--global-theme-color) 10%);
    --projects-border: color-mix(in srgb, var(--global-divider-color) 72%, var(--global-theme-color) 28%);
    --projects-accent: var(--global-theme-color);
    --projects-muted: var(--global-text-color-light);
    --projects-shadow: 0 16px 30px rgba(15, 23, 42, 0.06);
    --projects-video-frame: linear-gradient(135deg, rgba(8, 14, 25, 0.96), rgba(18, 32, 52, 0.9));
  }

  html[data-theme="dark"] .projects-page {
    --projects-surface: rgba(15, 26, 43, 0.96);
    --projects-surface-soft: rgba(16, 33, 53, 0.92);
    --projects-border: rgba(103, 232, 249, 0.18);
    --projects-muted: #9fb3c8;
    --projects-shadow: 0 18px 34px rgba(2, 8, 23, 0.34);
    --projects-video-frame: linear-gradient(135deg, rgba(5, 10, 18, 0.98), rgba(12, 29, 45, 0.94));
  }

  .projects-page .text-muted {
    color: var(--projects-muted) !important;
  }

  .showcase-intro {
    margin-bottom: 1rem;
    font-size: 1.05rem;
    line-height: 1.82;
  }

  .showcase-guide {
    margin: 0 0 1.4rem;
    padding: 1rem 1.1rem;
    border-left: 4px solid var(--projects-accent);
    border-radius: 14px;
    background: color-mix(in srgb, var(--projects-accent) 7%, transparent);
  }

  .showcase-summary {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    margin: 1.4rem 0;
  }

  .showcase-metric {
    padding: 1rem 1.1rem;
    border-radius: 18px;
    border: 1px solid var(--projects-border);
    background: var(--projects-surface);
    box-shadow: var(--projects-shadow);
  }

  .showcase-number {
    display: block;
    margin-bottom: 0.2rem;
    color: var(--projects-accent);
    font-size: 1.35rem;
    font-weight: 700;
  }

  .showcase-label {
    display: block;
    color: var(--projects-muted);
    font-size: 0.92rem;
  }

  .showcase-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin: 0 0 1.6rem;
  }

  .showcase-nav a {
    padding: 0.5rem 0.9rem;
    border-radius: 999px;
    border: 1px solid var(--projects-border);
    background: color-mix(in srgb, var(--projects-accent) 8%, transparent);
    color: var(--global-text-color);
    text-decoration: none;
    font-size: 0.92rem;
    font-weight: 600;
  }

  .showcase-nav a:hover {
    background: color-mix(in srgb, var(--projects-accent) 14%, transparent);
    text-decoration: none;
  }

  .showcase-overview {
    margin-bottom: 2rem;
    padding: 0.9rem;
    border-radius: 24px;
    border: 1px solid var(--projects-border);
    background: var(--projects-surface);
    box-shadow: var(--projects-shadow);
  }

  .showcase-overview figure {
    margin: 0;
  }

  .showcase-overview .caption {
    margin-top: 0.8rem;
    color: var(--projects-muted);
  }

  .showcase-section {
    margin-bottom: 2.4rem;
  }

  .showcase-section-panel {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(260px, 0.9fr);
    gap: 1.2rem;
    padding: 1rem 1.1rem;
    margin-bottom: 1rem;
    border-radius: 22px;
    border: 1px solid var(--projects-border);
    background: linear-gradient(
      135deg,
      color-mix(in srgb, var(--projects-accent) 9%, var(--projects-surface) 91%),
      var(--projects-surface)
    );
    box-shadow: var(--projects-shadow);
  }

  .showcase-section-heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.35rem;
    min-width: 0;
  }

  .showcase-section-topic {
    display: inline-flex;
    align-items: center;
    align-self: flex-start;
    padding: 0.28rem 0.72rem;
    border-radius: 999px;
    background: color-mix(in srgb, var(--projects-accent) 12%, transparent);
    color: var(--projects-accent);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.06em;
  }

  .showcase-section-heading h2 {
    margin-top: 0;
  }

  .showcase-section-aside {
    display: grid;
    gap: 0.75rem;
    align-content: center;
  }

  .showcase-section-focus {
    padding: 0.8rem 0.9rem;
    border-radius: 16px;
    background: color-mix(in srgb, var(--projects-accent) 7%, transparent);
    border: 1px solid color-mix(in srgb, var(--projects-accent) 16%, transparent);
  }

  .showcase-section-label {
    display: block;
    margin-bottom: 0.3rem;
    color: var(--projects-muted);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .showcase-section-focus p {
    margin-bottom: 0;
    line-height: 1.68;
  }

  .showcase-section-keywords {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
  }

  .showcase-section-keywords span {
    display: inline-flex;
    align-items: center;
    padding: 0.22rem 0.65rem;
    border-radius: 999px;
    background: color-mix(in srgb, var(--global-text-color) 6%, transparent);
    color: var(--projects-muted);
    font-size: 0.8rem;
  }

  .showcase-section-count {
    display: inline-flex;
    align-items: center;
    align-self: flex-start;
    padding: 0.3rem 0.72rem;
    border-radius: 999px;
    border: 1px solid var(--projects-border);
    background: color-mix(in srgb, var(--projects-accent) 8%, transparent);
    color: var(--projects-muted);
    font-size: 0.92rem;
    white-space: nowrap;
  }

  .showcase-project-list {
    display: grid;
    gap: 1.2rem;
  }

  .showcase-project-card {
    display: grid;
    grid-template-columns: minmax(320px, 420px) minmax(0, 1fr);
    gap: 1.3rem;
    padding: 1.2rem;
    border-radius: 24px;
    border: 1px solid var(--projects-border);
    background: var(--projects-surface);
    box-shadow: var(--projects-shadow);
  }

  .showcase-project-card:nth-child(odd) {
    background: linear-gradient(
      135deg,
      color-mix(in srgb, var(--projects-accent) 8%, var(--projects-surface) 92%),
      var(--projects-surface)
    );
  }

  .showcase-content {
    min-width: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .showcase-card-top {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
    align-items: center;
    margin-bottom: 0.75rem;
  }

  .showcase-chip-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
  }

  .showcase-role-chip,
  .showcase-chip {
    display: inline-flex;
    align-items: center;
    padding: 0.22rem 0.6rem;
    border-radius: 999px;
    font-size: 0.8rem;
    line-height: 1.4;
  }

  .showcase-role-chip {
    background: color-mix(in srgb, var(--projects-accent) 12%, transparent);
    color: var(--projects-accent);
    font-weight: 700;
  }

  .showcase-chip {
    background: color-mix(in srgb, var(--global-text-color) 6%, transparent);
    color: var(--projects-muted);
  }

  .showcase-project-title {
    margin-bottom: 0.55rem;
    font-size: 1.35rem;
    line-height: 1.36;
  }

  .showcase-project-summary {
    margin-bottom: 0;
    font-size: 1rem;
    line-height: 1.72;
  }

  .showcase-detail-block {
    margin-top: 0.95rem;
    padding-top: 0.95rem;
    border-top: 1px solid var(--projects-border);
  }

  .showcase-detail-title {
    margin-bottom: 0.5rem;
    color: var(--projects-muted);
    font-size: 0.9rem;
  }

  .showcase-detail-list {
    padding-left: 1.1rem;
    margin-bottom: 0;
    color: var(--projects-muted);
  }

  .showcase-detail-list li + li {
    margin-top: 0.4rem;
  }

  .showcase-video {
    padding: 0.55rem;
    border-radius: 20px;
    border: 1px solid color-mix(in srgb, var(--projects-accent) 18%, transparent);
    background: var(--projects-video-frame);
  }

  .showcase-video figure {
    margin: 0;
  }

  .showcase-video video {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: contain;
    border-radius: 16px;
    background: var(--projects-video-frame);
    box-shadow: 0 12px 24px rgba(15, 23, 42, 0.12);
  }

  @media (max-width: 992px) {
    .showcase-section-panel,
    .showcase-project-card {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .showcase-summary {
      grid-template-columns: 1fr;
    }

    .showcase-project-card {
      padding: 1rem;
    }

    .showcase-overview {
      padding: 0.75rem;
    }
  }
</style>
