#!/usr/bin/env bash
# =====================================================================
# Atividade 2: Riak (via HTTP)
# Buckets: professores, alunos, funcionarios
# Pré-requisito: Riak ativo e respondendo em localhost:8098
#   Teste com:  curl http://localhost:8098/ping     (deve responder OK)
# Execute os comandos etapa por etapa.
# =====================================================================

BASE="http://localhost:8098/types/default/buckets"


# ---------------------------------------------------------------------
# ETAPA 1: Inserir os 6 objetos chave-valor em três buckets
# ---------------------------------------------------------------------

# Bucket: professores
curl -XPUT -d "35" "$BASE/professores/keys/Thyago"
curl -XPUT -d "28" "$BASE/professores/keys/Afonso"

# Bucket: alunos
curl -XPUT -d "32" "$BASE/alunos/keys/Fernanda"
curl -XPUT -d "12" "$BASE/alunos/keys/Theo"

# Bucket: funcionarios
curl -XPUT -d "20" "$BASE/funcionarios/keys/Sophia"
curl -XPUT -d "15" "$BASE/funcionarios/keys/Leonardo"

# Listar as chaves de cada bucket separadamente
echo "--- professores ---"; curl "$BASE/professores/keys?keys=true"; echo
echo "--- alunos ---";       curl "$BASE/alunos/keys?keys=true"; echo
echo "--- funcionarios ---"; curl "$BASE/funcionarios/keys?keys=true"; echo

# ENTREGÁVEL: print da tela após as consultas (salvar em prints/).


# ---------------------------------------------------------------------
# ETAPA 2: Alterar, mover e excluir
# ---------------------------------------------------------------------

# 2.1 Alterar a idade de Theo para 25
#     No Riak, um PUT em uma chave existente sobrescreve o valor.
curl -XPUT -d "25" "$BASE/alunos/keys/Theo"

# 2.2 Leonardo deixa de ser funcionário e passa a ser professor
#     Não existe "mover" entre buckets: criamos no destino e apagamos na origem.
curl -XPUT -d "15" "$BASE/professores/keys/Leonardo"
curl -XDELETE "$BASE/funcionarios/keys/Leonardo"

# 2.3 Excluir Afonso
curl -XDELETE "$BASE/professores/keys/Afonso"

# 2.4 Obter a nova idade de Theo e apresentar no console
echo "Idade de Theo: $(curl -s "$BASE/alunos/keys/Theo")"

# 2.5 Listar as chaves de cada bucket separadamente
echo "--- professores ---"; curl "$BASE/professores/keys?keys=true"; echo
echo "--- alunos ---";       curl "$BASE/alunos/keys?keys=true"; echo
echo "--- funcionarios ---"; curl "$BASE/funcionarios/keys?keys=true"; echo

# ENTREGÁVEL: print da tela após as consultas (salvar em prints/).
