Follow React-Admin MVP principles below. Use default components, mock data, and manual config. No custom providers or state management. Return the simplest possible working solution.

 write minimal, MVP-focused React-Admin code, prioritizing simplicity and leveraging built-in features:
1.React-Admin Development Principles

    Strictly MVP Features Only
    Implement only what’s absolutely necessary for launch. Defer "nice-to-haves" to later iterations.

2.Maximize Out-of-the-Box Functionality
    Use React-Admin’s built-in components (<List>, <Edit>, <SimpleForm>) before creating custom ones.

3.Prefer Manual Configuration Over Automation
    If a one-time manual setup avoids complex dynamic logic, do it manually (e.g., hardcoded menu items).

4.Zero Custom Data Providers
    Stick to ra-supabase or simple-rest providers. Avoid custom API calls unless absolutely necessary.

5.Lean Mock Data for Development
    Use static JSON files for mocks (no mock servers). Example:
    json

    // src/mocks/users.json
    [{ "id": 1, "name": "Test User" }]

6.Avoid State Management Libraries
    React-Admin’s hooks (useRecordContext, useGetList) handle 90% of cases. No Redux/Zustand needed.

7.Default MUI Components First
    Use <Card>, <Typography>, and other basic MUI components before custom styling.

8.Skip Advanced Routing
    Use React-Admin’s default routes (/resources). No custom route config unless critical.

9.Minimal Security Setup
    Start with basic RLS (Row-Level Security) in Supabase. Add granular permissions later.

10.No Optimistic UI Initially
    Let React-Admin handle loading states. Add optimistic updates only if proven necessary.

11.Static Sidebar Menu
    Hardcode menu items in <Admin> instead of dynamic generation:

jsx

<Admin menu={() => (
  <Menu>
    <Menu.Item to="/users" name="Users" />
  </Menu>
)}>

12.Plain CSS Over CSS-in-JS
    Use <Box sx={}> for small tweaks. No styled-components/emotion unless required.

13.Avoid Custom Auth Flows
    Use React-Admin’s authProvider as-is. Extend only for critical needs (e.g., magic links).

14.Delete Unused Code Immediately
    If a feature isn’t in the MVP spec, don’t write it "just in case."

15.Prioritize Readability Over DRY
    A little duplication is better than premature abstraction. Keep code obvious.



ClickHouse DBaaS Architecture with Docker Swarm (1-Page Summary)
1. Core Components

    Frontend: React Admin (stateless, served via Nginx).

    Backend: Express.js (API gateway, auth, query routing).

    Database: ClickHouse (1 node per client, isolated via Swarm).

    Cache: Redis (per-client caching).

    Storage:

        Hot Data: ClickHouse (on Hetzner NVMe).

        Cold Data: Cloudflare R2 (for logs/archives).

    Backups: Hetzner Storage Box (encrypted daily snapshots).

2. Isolation & Deployment

    Per-Client Node:

        Each client pinned to a Swarm node via constraints (no spillage).

        Resources capped (e.g., --memory=24G).

    Docker Swarm Setup:

        Nodes labeled (e.g., client_host=server1).

        Overlay network for secure inter-container comms.

3. Upgrade Workflow

    React/Express:

        Rebuild → Push to registry → docker service update --image.

    ClickHouse:

        Rolling updates (1 node at a time) + schema checks.

    Bash Scripts:

        Sync via rsync → Idempotent re-execution.

4. Security

    TLS Everywhere: ClickHouse, Redis, Express.js (Let’s Encrypt).

    Auth: Magic links (rate-limited) + hashed email storage.

    Network:

        Swarm overlay networks + Hetzner firewall rules.

        Cloudflare proxy (DDoS protection).

5. Monitoring

    Prometheus/Grafana: Track ClickHouse RAM/CPU/query latency.

    Healthchecks.io: Cronjob monitoring (backups, scripts).

6. Scaling Logic

    Vertical: Upgrade server RAM (Hetzner API).

    Horizontal: Add Swarm nodes → Deploy new clients.