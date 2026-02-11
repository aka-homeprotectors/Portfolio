import{d as c,c as n,a as t,t as d,u as i,b as o,e as r,o as l,_ as v}from"./index-tLqKfWI_.js";const f={class:"detail-container"},p={class:"detail-header"},u={class:"title"},b=c({__name:"ProjectDetailView",setup(h){const e=r().query.title||"Project";return(s,a)=>(l(),n("div",f,[t("button",{onClick:a[0]||(a[0]=m=>s.$router.back()),class:"btn-back"},"← Back to Portfolio"),t("header",p,[t("h1",u,d(i(e)),1),a[1]||(a[1]=t("p",{class:"subtitle"},"Technical Deep Dive & Architecture",-1))]),a[2]||(a[2]=o(`<section class="tech-stack-detail" data-v-ba672fac><h2 class="section-label" data-v-ba672fac>Key Features &amp; Implementation</h2><div class="grid-layout" data-v-ba672fac><div class="card" data-v-ba672fac><div class="card-icon" data-v-ba672fac>🔍</div><h4 data-v-ba672fac>Recursive Match-3</h4><p data-v-ba672fac>DFS(깊이 우선 탐색)를 활용하여 그리드 내 동일 타일을 탐색하고 처리하는 재귀 로직을 구현했습니다.</p></div><div class="card" data-v-ba672fac><div class="card-icon" data-v-ba672fac>💾</div><h4 data-v-ba672fac>State Management</h4><p data-v-ba672fac>타일의 병합과 이동 상태를 효율적으로 관리하기 위해 2차원 배열과 비트마스킹을 활용해 최적화했습니다.</p></div></div></section><section class="code-section" data-v-ba672fac><h2 class="section-label" data-v-ba672fac>Core Algorithm Snippet</h2><div class="code-wrapper" data-v-ba672fac><div class="code-header" data-v-ba672fac><span class="dot red" data-v-ba672fac></span><span class="dot yellow" data-v-ba672fac></span><span class="dot green" data-v-ba672fac></span><span class="lang-label" data-v-ba672fac>TypeScript</span></div><pre data-v-ba672fac><code data-v-ba672fac>
// 예시: 재귀를 이용한 타일 탐색 로직 (DFS)
function findMatches(x: number, y: number, targetValue: number): void {
  // 경계 검사 및 이미 방문한 타일인지 확인
  if (isOutOfBounds(x, y) || visited[x][y]) return;
  
  // 현재 타일 값이 목표값과 일치하는지 확인
  if (grid[x][y].value !== targetValue) return;

  visited[x][y] = true;
  matches.push({ x, y });

  // 상하좌우 인접 타일 탐색
  findMatches(x + 1, y, targetValue);
  findMatches(x - 1, y, targetValue);
  findMatches(x, y + 1, targetValue);
  findMatches(x, y - 1, targetValue);
}
        </code></pre></div></section>`,2))]))}}),x=v(b,[["__scopeId","data-v-ba672fac"]]);export{x as default};
