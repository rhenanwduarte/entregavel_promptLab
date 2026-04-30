---
name: prompt-database-br
description: "Gerenciador da Biblioteca de Prompts (Entregável). Foco em tradução de UI e escalabilidade de dados."
risk: low
source: custom
---

# Prompt Database Manager

## 🎯 Goal
Traduzir a interface (Sidebar, Headers, Buttons) para Português e organizar a estrutura de dados para atualizações mensais simplificadas.

## 📋 Dicionário de Tradução (UI)
- **Core Modules:** Módulos Principais
- **Status Synced:** Sincronizado
- **Loaded:** Carregados
- **Categories:** Categorias
- **Expand Prompt:** Ver Prompt Completo
- **Copy Master Prompt:** Copiar Prompt Mestre
- **High Fidelity Prompt:** Prompt de Alta Fidelidade

## 🔍 Mapeamento Técnico
O Agente deve localizar onde os prompts estão armazenados:
1. Verifique se existe um arquivo `src/constants/prompts.ts` ou similar.
2. Verifique se o front consome os dados direto das Edge Functions do Supabase ou de uma tabela no DB.