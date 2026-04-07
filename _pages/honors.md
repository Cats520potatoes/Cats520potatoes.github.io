---
layout: page
title: 荣誉与证书
permalink: /honors/
description: 这里汇总了我在机器人、嵌入式和学业方向的部分代表性奖项与证明材料。
nav: true
nav_order: 4
---

这里收录的是目前已经整理进站点的代表性奖项、证书与学业证明。图片证书可以直接点开查看原图，PDF 类型则提供原件下载。

{% for section in site.data.honors.sections %}
  <section class="honor-section">
    <h2 class="mb-1">{{ section.title }}</h2>
    <p class="text-muted">{{ section.description }}</p>

    <div class="row">
      {% for item in section.items %}
        <div class="col-md-6 col-xl-4 mb-4">
          <div class="card h-100 hoverable honor-card">
            {% if item.kind == "image" %}
              <a href="{{ item.path | relative_url }}" target="_blank" rel="noopener noreferrer" class="honor-cover">
                {% include figure.liquid path=item.path class="img-fluid rounded-top z-depth-1" alt=item.title loading="lazy" %}
              </a>
            {% elsif item.kind == "pdf" %}
              <div class="honor-pdf d-flex align-items-center justify-content-center">
                <div class="text-center">
                  <div class="honor-pdf-icon"><i class="fa-solid fa-file-pdf"></i></div>
                  <a href="{{ item.path | relative_url }}" target="_blank" rel="noopener noreferrer">打开 PDF</a>
                </div>
              </div>
            {% endif %}

            <div class="card-body">
              <h5 class="card-title mb-1">{{ item.title }}</h5>
              <p class="text-muted small mb-2">{{ item.year }}</p>
              <p class="card-text">{{ item.summary }}</p>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  </section>
{% endfor %}

<style>
  .honor-section {
    margin-bottom: 2.5rem;
  }

  .honor-card {
    border: 1px solid rgba(0, 0, 0, 0.08);
    overflow: hidden;
  }

  .honor-cover figure {
    margin: 0;
  }

  .honor-cover img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    object-position: center top;
  }

  .honor-pdf {
    min-height: 260px;
    background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
  }

  .honor-pdf-icon {
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }
</style>
