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

<div class="projects-shell">
  <section class="showcase-hero">
    <div class="showcase-hero-copy">
      <span class="showcase-kicker">PROJECT SYSTEMS</span>
      <p class="showcase-intro">
        这个页面不是单纯的视频堆叠，而是按照研究与工程方向整理过的一组项目样本。它覆盖了我在具身智能、机器人动力学、运动控制、逆运动学求解以及嵌入式系统实现方面的代表性工作，尽量让访问者能快速看出我“做过什么、怎么做的、做到什么程度”。
      </p>

      <div class="showcase-guide">
        <strong>建议浏览路径：</strong>
        如果你第一次访问这个页面，可以先看“具身智能与操作演示”中的灵巧手重定向和抓取任务，再看“运动学与算法验证”里的逆解模块，最后浏览“水下与链式机器人”以及“嵌入式与竞赛原型”，这样更容易理解我从算法到系统实现的完整工作链路。
      </div>
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
  </div>

  <div class="showcase-nav">
    {% for section in site.data.projects_showcase.sections %}
      <a href="#{{ section.title | slugify }}">{{ section.title }}</a>
    {% endfor %}
  </div>

  <div class="showcase-visual-card">
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
    <div class="showcase-section-heading">
      <div>
        <span class="showcase-section-kicker">SECTION {{ forloop.index }}</span>
        <h2 class="mb-1">{{ section.title }}</h2>
        <p class="text-muted mb-0">{{ section.description }}</p>
      </div>
      <span class="showcase-section-count">{{ section.items.size }} 个项目视频</span>
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
  .projects-shell {
    --projects-surface: linear-gradient(
      180deg,
      color-mix(in srgb, var(--global-card-bg-color) 96%, white 4%),
      color-mix(in srgb, var(--global-card-bg-color) 86%, var(--global-theme-color) 14%)
    );
    --projects-surface-strong: linear-gradient(
      135deg,
      color-mix(in srgb, var(--global-card-bg-color) 84%, var(--global-theme-color) 16%),
      color-mix(in srgb, var(--global-card-bg-color) 94%, white 6%)
    );
    --projects-border: color-mix(in srgb, var(--global-divider-color) 70%, var(--global-theme-color) 30%);
    --projects-border-strong: color-mix(in srgb, var(--global-theme-color) 42%, var(--global-divider-color) 58%);
    --projects-accent: #0f766e;
    --projects-accent-2: #0891b2;
    --projects-muted: var(--global-text-color-light);
    --projects-shadow: 0 24px 48px rgba(8, 15, 28, 0.08);
    --projects-video-frame: linear-gradient(135deg, rgba(9, 17, 31, 0.95), rgba(18, 32, 53, 0.88));
    position: relative;
    margin-top: 0.5rem;
  }

  html[data-theme="dark"] .projects-shell {
    --projects-surface: linear-gradient(180deg, rgba(11, 19, 34, 0.94), rgba(7, 15, 27, 0.92));
    --projects-surface-strong: linear-gradient(135deg, rgba(9, 20, 36, 0.96), rgba(7, 16, 30, 0.96), rgba(11, 34, 52, 0.92));
    --projects-border: rgba(103, 232, 249, 0.16);
    --projects-border-strong: rgba(94, 234, 212, 0.3);
    --projects-accent: #67e8f9;
    --projects-accent-2: #5eead4;
    --projects-muted: #9fb3c8;
    --projects-shadow: 0 28px 56px rgba(2, 8, 23, 0.45);
    --projects-video-frame: linear-gradient(135deg, rgba(5, 10, 18, 0.98), rgba(12, 29, 45, 0.94));
  }

  .projects-shell::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at top right, color-mix(in srgb, var(--projects-accent-2) 18%, transparent) 0, transparent 28%),
      radial-gradient(circle at 0 18%, color-mix(in srgb, var(--projects-accent) 16%, transparent) 0, transparent 24%);
    pointer-events: none;
    opacity: 0.95;
  }

  .projects-shell > * {
    position: relative;
    z-index: 1;
  }

  .showcase-hero {
    display: grid;
    grid-template-columns: minmax(0, 1.3fr) minmax(280px, 0.95fr);
    gap: 1.2rem;
    margin: 1rem 0 1.5rem;
  }

  .showcase-hero-copy {
    position: relative;
    overflow: hidden;
    padding: 1.45rem 1.5rem;
    border-radius: 28px;
    border: 1px solid var(--projects-border-strong);
    background: var(--projects-surface-strong);
    box-shadow: var(--projects-shadow);
  }

  .showcase-hero-copy::after {
    content: "";
    position: absolute;
    inset: auto -15% -40% auto;
    width: 18rem;
    height: 18rem;
    background: radial-gradient(circle, color-mix(in srgb, var(--projects-accent-2) 22%, transparent) 0, transparent 62%);
    pointer-events: none;
  }

  .showcase-kicker {
    display: inline-flex;
    align-items: center;
    padding: 0.35rem 0.8rem;
    margin-bottom: 0.9rem;
    border-radius: 999px;
    border: 1px solid color-mix(in srgb, var(--projects-accent) 28%, transparent);
    background: color-mix(in srgb, var(--projects-accent) 10%, transparent);
    color: var(--projects-accent);
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .showcase-intro {
    margin-bottom: 0;
    font-size: 1.08rem;
    line-height: 1.86;
    max-width: 52rem;
  }

  .showcase-guide {
    margin-top: 1rem;
    padding: 1rem 1.1rem;
    border-radius: 22px;
    background: color-mix(in srgb, var(--global-theme-color) 8%, transparent);
    border: 1px solid color-mix(in srgb, var(--global-theme-color) 18%, transparent);
  }

  .showcase-summary {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.9rem;
  }

  .showcase-metric {
    padding: 1.05rem 1.1rem;
    border-radius: 22px;
    background: var(--projects-surface);
    border: 1px solid var(--projects-border);
    box-shadow: var(--projects-shadow);
  }

  .showcase-number {
    display: block;
    margin-bottom: 0.2rem;
    color: var(--projects-accent);
    font-size: 1.55rem;
    font-weight: 700;
    line-height: 1.2;
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
    padding: 0.55rem 0.95rem;
    border-radius: 999px;
    border: 1px solid color-mix(in srgb, var(--projects-accent) 26%, transparent);
    background: color-mix(in srgb, var(--projects-accent) 8%, transparent);
    color: var(--global-text-color);
    text-decoration: none;
    font-size: 0.92rem;
    font-weight: 600;
    box-shadow: 0 10px 22px color-mix(in srgb, var(--projects-accent) 10%, transparent);
    transition:
      transform 0.18s ease,
      border-color 0.18s ease,
      background 0.18s ease;
  }

  .showcase-nav a:hover {
    transform: translateY(-1px);
    border-color: var(--projects-border-strong);
    background: color-mix(in srgb, var(--projects-accent) 14%, transparent);
    text-decoration: none;
  }

  .showcase-visual-card {
    padding: 1rem;
    margin-bottom: 1.75rem;
    border-radius: 30px;
    border: 1px solid var(--projects-border);
    background: var(--projects-surface);
    box-shadow: var(--projects-shadow);
  }

  .showcase-visual-card .caption {
    margin-top: 0.85rem;
    color: var(--projects-muted);
  }

  .showcase-visual-card figure {
    margin: 0;
  }

  .showcase-section {
    margin-bottom: 2.7rem;
  }

  .showcase-section-heading {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .showcase-section-kicker {
    display: inline-block;
    margin-bottom: 0.4rem;
    color: var(--projects-accent);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .showcase-section-count {
    display: inline-flex;
    align-items: center;
    padding: 0.4rem 0.85rem;
    border-radius: 999px;
    border: 1px solid var(--projects-border);
    background: color-mix(in srgb, var(--projects-accent) 8%, transparent);
    color: var(--projects-muted);
    font-size: 0.92rem;
    white-space: nowrap;
  }

  .projects-shell .text-muted {
    color: var(--projects-muted) !important;
  }

  .showcase-project-list {
    display: grid;
    gap: 1.25rem;
  }

  .showcase-project-card {
    position: relative;
    overflow: hidden;
    display: grid;
    grid-template-columns: minmax(340px, 460px) minmax(0, 1fr);
    gap: 1.3rem;
    padding: 1.25rem;
    border-radius: 30px;
    border: 1px solid var(--projects-border);
    background: var(--projects-surface);
    box-shadow: var(--projects-shadow);
  }

  .showcase-project-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 1.25rem;
    width: 8rem;
    height: 1px;
    background: linear-gradient(90deg, var(--projects-accent), transparent);
  }

  .showcase-project-card:nth-child(odd) {
    background: linear-gradient(
      135deg,
      color-mix(in srgb, var(--global-theme-color) 12%, var(--global-card-bg-color) 88%),
      color-mix(in srgb, var(--global-card-bg-color) 96%, white 4%)
    );
  }

  .showcase-media,
  .showcase-content {
    min-width: 0;
  }

  .showcase-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .showcase-card-top {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.8rem;
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
    padding: 0.24rem 0.7rem;
    border-radius: 999px;
    font-size: 0.8rem;
    line-height: 1.4;
  }

  .showcase-role-chip {
    border: 1px solid color-mix(in srgb, var(--projects-accent) 24%, transparent);
    background: color-mix(in srgb, var(--projects-accent) 12%, transparent);
    color: var(--projects-accent);
    font-weight: 700;
  }

  .showcase-chip {
    border: 1px solid color-mix(in srgb, var(--global-divider-color) 78%, transparent);
    background: color-mix(in srgb, var(--global-text-color) 6%, transparent);
    color: var(--projects-muted);
  }

  .showcase-project-title {
    margin-bottom: 0.55rem;
    font-size: 1.42rem;
    line-height: 1.34;
  }

  .showcase-project-summary {
    margin-bottom: 0;
    font-size: 1rem;
    line-height: 1.78;
  }

  .showcase-detail-block {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--projects-border);
  }

  .showcase-detail-title {
    margin-bottom: 0.55rem;
    color: var(--projects-muted);
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
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
    position: relative;
    padding: 0.65rem;
    border-radius: 24px;
    border: 1px solid color-mix(in srgb, var(--projects-accent) 22%, transparent);
    background: var(--projects-video-frame);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.08),
      0 18px 32px rgba(2, 8, 23, 0.2);
  }

  .showcase-video::before {
    content: "PROJECT FEED";
    display: inline-flex;
    align-items: center;
    position: absolute;
    top: 0.75rem;
    left: 0.85rem;
    z-index: 2;
    padding: 0.2rem 0.55rem;
    border-radius: 999px;
    background: color-mix(in srgb, var(--projects-accent) 16%, transparent);
    color: #eaffff;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
  }

  .showcase-video figure {
    margin: 0;
  }

  .showcase-video video {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: contain;
    border-radius: 20px;
    background: linear-gradient(135deg, rgba(5, 10, 18, 0.98), rgba(12, 29, 45, 0.94));
    box-shadow: 0 14px 28px rgba(15, 23, 42, 0.12);
  }

  @media (max-width: 992px) {
    .showcase-hero,
    .showcase-project-card {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .showcase-summary {
      grid-template-columns: 1fr;
    }

    .showcase-hero-copy,
    .showcase-project-card {
      padding: 1rem;
    }

    .showcase-visual-card {
      padding: 0.75rem;
    }
  }
</style>
