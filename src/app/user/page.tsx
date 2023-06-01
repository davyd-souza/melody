// COMPONENT
import { Switch } from '@/components/Switch'

// STYLE
import { UserRoot, Title, SwitchGroup, ConfigGroup } from './page.style'

export default function User() {
  return (
    <UserRoot>
      <Title>Configurações</Title>

      <ConfigGroup>
        <SwitchGroup>
          <label htmlFor="auto-play">Auto Play</label>
          <Switch defaultChecked id="auto-play" />
        </SwitchGroup>

        <SwitchGroup>
          <label htmlFor="mix-audio">Mix Audio Types</label>
          <Switch id="mix-audio" />
        </SwitchGroup>

        <SwitchGroup>
          <label htmlFor="week-discovery">Enable Week Discovery</label>
          <Switch id="week-discovery" />
        </SwitchGroup>

        <SwitchGroup>
          <label htmlFor="auto-dj">Enable Auto DJ</label>
          <Switch defaultChecked id="auto-dj" />
        </SwitchGroup>

        <SwitchGroup>
          <label htmlFor="3d-audio">Enable 3D Audio</label>
          <Switch defaultChecked id="3d-audio" />
        </SwitchGroup>

        <SwitchGroup>
          <label htmlFor="auto-sync">Enable Auto Sync</label>
          <Switch id="auto-sync" />
        </SwitchGroup>
      </ConfigGroup>
    </UserRoot>
  )
}
