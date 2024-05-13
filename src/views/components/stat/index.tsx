import { Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react"

const VComponentStat: React.FC<MComponentGlobalStat.Properties> = ({
  label,
  value,
  help,
  onClick
}): JSX.Element => {

    return (<Stat
      border={"1px solid rgba(0,0,0,.1)"}
      paddingY={4}
      paddingX={4} 
      cursor={onClick !== undefined ? "pointer" : "auto"}
      onClick={() => {
        if (onClick !== undefined) onClick();
      }}>
      <StatLabel>{label}</StatLabel>
      <StatNumber>{value}</StatNumber>
      {help !== undefined && (<StatHelpText>{help}</StatHelpText>)}
    </Stat>)
}

export default VComponentStat