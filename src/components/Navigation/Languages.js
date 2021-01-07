import React from "react"
import { useIntl, changeLocale } from "gatsby-plugin-intl"
import { PlFlag, RuFlag, EnFlag, FlagsWrapper } from "../../assets/styles/index"

let myMap = new Map([
  ["pl", <PlFlag />],
  ["en", <EnFlag />],
])

export const Languages = () => {
  const intl = useIntl()

  return (
    <FlagsWrapper>
      {[...myMap]
        .filter((k, v) => k[0] !== intl.locale)
        .map(v =>
          React.createElement(v[1].type, {
            key: v[0],
            onClick: () => {
              changeLocale(v[0])
            },
          })
        )}
    </FlagsWrapper>
  )
}
