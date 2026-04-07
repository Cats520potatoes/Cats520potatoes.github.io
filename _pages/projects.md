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

这个页面不是单纯的视频堆叠，而是按照研究与工程方向整理过的一组项目样本。它覆盖了我在具身智能、机器人动力学、运动控制、逆运动学求解以及嵌入式系统实现方面的代表性工作，尽量让访问者能快速看出我“做过什么、怎么做的、做到什么程度”。

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

<div class="row justify-content-center mb-4">
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

{% for section in site.data.projects_showcase.sections %}
  <section class="showcase-section" id="{{ section.title | slugify }}">
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-3">
      <div>
        <h2 class="mb-1">{{ section.title }}</h2>
        <p class="text-muted mb-0">{{ section.description }}</p>
      </div>
      <span class="showcase-section-count">{{ section.items.size }} 个项目视频</span>
    </div>

    <div class="row">
      {% for item in section.items %}
        <div class="col-lg-6 mb-4">
          <div class="card h-100 hoverable showcase-card">
            <div class="card-body">
              <div class="showcase-video mb-3">
                {% include video.liquid path=item.path class="img-fluid rounded z-depth-1" controls=true %}
              </div>
              <div class="showcase-chip-row mb-2">
                <span class="showcase-role-chip">{{ item.role }}</span>
                {% for tag in item.tags %}
                  <span class="showcase-chip">{{ tag }}</span>
                {% endfor %}
              </div>
              <h5 class="card-title mb-1">{{ item.title }}</h5>
              <p class="card-text">{{ item.summary }}</p>
              {% if item.details %}
                <h6 class="showcase-detail-title">项目说明</h6>
                <ul>
                  {% for detail in item.details %}
                    <li>{{ detail }}</li>
                  {% endfor %}
                </ul>
              {% endif %}
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  </section>
{% endfor %}

<style>
  .showcase-summary {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    margin: 1.5rem 0;
  }

  .showcase-guide {
    margin: 1rem 0 1.5rem;
    padding: 1rem 1.1rem;
    border-left: 4px solid #2f7d32;
    border-radius: 12px;
    background: rgba(47, 125, 50, 0.06);
  }

  .showcase-metric {
    padding: 1rem 1.1rem;
    border-radius: 14px;
    background: linear-gradient(135deg, rgba(34, 139, 34, 0.08), rgba(15, 23, 42, 0.04));
    border: 1px solid rgba(0, 0, 0, 0.07);
  }

  .showcase-number {
    display: block;
    font-size: 1.35rem;
    font-weight: 700;
  }

  .showcase-label {
    display: block;
    color: #6c757d;
    font-size: 0.92rem;
  }

  .showcase-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin: 0 0 1.75rem 0;
  }

  .showcase-nav a {
    padding: 0.45rem 0.85rem;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.045);
    color: inherit;
    text-decoration: none;
    font-size: 0.92rem;
  }

  .showcase-section {
    margin-bottom: 2.5rem;
  }

  .showcase-section-count {
    color: #6c757d;
    font-size: 0.92rem;
  }

  .showcase-card {
    border: 1px solid rgba(0, 0, 0, 0.08);
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
    background: rgba(47, 125, 50, 0.12);
    color: #1f5e26;
    font-weight: 600;
  }

  .showcase-chip {
    background: rgba(0, 0, 0, 0.05);
    color: #495057;
  }

  .showcase-detail-title {
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
  }

  .showcase-card ul {
    padding-left: 1.1rem;
    margin-bottom: 0.9rem;
  }

  .showcase-video figure {
    margin: 0;
  }

  .showcase-video video {
    width: 100%;
    height: auto;
    background: #000;
  }

  @media (max-width: 768px) {
    .showcase-summary {
      grid-template-columns: 1fr;
    }
  }
</style>
