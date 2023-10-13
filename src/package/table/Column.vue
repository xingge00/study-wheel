<script lang="jsx">
export default {
  name: 'Column',
  props: { colums: Array },
  render: (ctx) => {
    const cellRender = (col, scope) => {
      const {
        render,
        type,
        prop,
      } = col
      if (['index', 'selection'].includes(type)) return
      if (render) return render(scope)
      else return <span class="no-drag">{ scope.row[prop] ?? '—' }</span>
    }
    const getRender = (colums) => {
      return colums.map((col) => {
        const { children, ...otherAttrs } = col
        const {
          require,
          labelRender,
          label,
          render,
          ...attrs
        } = otherAttrs

        return (
          <el-table-column
            {...attrs}
            v-slots={{
              default: (scope) => {
                if (Array.isArray(children) && children.length > 1) return getRender(children)
                else return cellRender(otherAttrs, scope)
              },
              header: () => {
                const Require = require ? <span style="color:red;">*</span> : null
                return (
                  <>
                    {Require}
                    {
                      labelRender
                        ? labelRender()
                        : <span >{ label }</span>
                    }
                  </>
                )
              },
            }}
          ></el-table-column>
        )
      })
    }
    return getRender(ctx.colums)
  },
}
</script>
