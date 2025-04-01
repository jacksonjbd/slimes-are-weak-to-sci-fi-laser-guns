namespace SpriteKind {
    export const Interact = SpriteKind.create()
    export const Helmet = SpriteKind.create()
    export const Level = SpriteKind.create()
    export const Slime = SpriteKind.create()
    export const Dummy = SpriteKind.create()
    export const UserInterface = SpriteKind.create()
    export const PickupBox = SpriteKind.create()
    export const Introduction = SpriteKind.create()
    export const Potion = SpriteKind.create()
    export const WeaponPickup = SpriteKind.create()
}
/**
 * Sprite Directions 8:
 * 
 *    ┌       /\      ┐
 * 
 *        8   1   2    
 * 
 *   <   7    0    3   >
 * 
 *        6   5   4    
 * 
 *    └       \/      ┘
 */
/**
 * Interact States:
 * 
 * 0 - Shoot
 * 
 * 1 - Interact
 * 
 * 2 - Sword
 * 
 * Player_WhoIsClosest:
 * 
 * 0 - None
 * 
 * 1 - Player Change
 * 
 * 2 - Wizard
 * 
 * 3 - Game Start
 * 
 * 4 - Controls Change
 */
/**
 * Player States:
 * 
 * 0 - Idle
 * 
 * 1 - Walking
 * 
 * 2 - Jumping
 * 
 * 3 - Attacking
 * 
 * 4 - Locked
 */
/**
 * == Slime Data Types ==
 * 
 * "lastJump" (time since start (ms))
 * 
 * Upwards Position "Vertical" 
 * 
 * "MoveX" 
 * 
 * "MoveY" 
 * 
 * "CurrentHealth"
 */
function Play_Player_BreakHelmet () {
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 3112, 3068, 255, 0, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    music.play(music.createSoundEffect(WaveShape.Noise, 5000, 3068, 255, 0, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    scene.cameraShake(4, 200)
}
function Play_Menu_Change () {
    music.play(music.createSoundEffect(
    WaveShape.Sine,
    1250,
    4163,
    Setting_Sound_EffectsVolume / 1,
    0,
    10,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.InBackground)
}
function Player_UpdateDirection () {
    if ((dx_Stabilized() != 0 || dy_Stabilized() != 0) && Sprite_GetDirection8(Player_Sprite_MoveController, 0) != 0 && Player_CurrentState != 2) {
        Player_CurrentDirection = Sprite_GetDirection8(Player_Sprite_MoveController, 0)
    }
}
function Play_Game_Start1 () {
    music.play(music.createSoundEffect(
    WaveShape.Sine,
    73.4,
    73.4,
    255,
    0,
    500,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.InBackground)
    music.play(music.createSoundEffect(
    WaveShape.Sine,
    73.4,
    73.4,
    255,
    0,
    500,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.InBackground)
    music.play(music.createSoundEffect(
    WaveShape.Triangle,
    293,
    293,
    255,
    0,
    500,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.InBackground)
    music.play(music.createSoundEffect(
    WaveShape.Sawtooth,
    392,
    392,
    255,
    0,
    500,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.InBackground)
}
function Settings_CameraUI () {
    Setting_Camera_ScrenshakeIntensity = 4
    Setting_Player_MovingCameraOffset = 12
    Setting_Player_MovingCameraSpeed = 2
    Setting_Player_CameraResetDelay = 1000
    Setting_UI_InterfaceZ = 10000
    Setting_UI_ButtonIconShakeDuration = 200
}
function Play_Weapon_PeashooterEmpty () {
    music.play(music.createSoundEffect(WaveShape.Noise, 3921, 3877, 71, 0, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
}
function Player_InitializePlayer () {
    Player_CreateJumpController()
    Player_CreateMoveController()
    Player_CreateVisuals()
    Player_UpdateState()
    UI_CreateUserInterface()
    Game_doesPlayerExist = true
}
function Game_Brightness100 () {
    color.setColor(1, color.rgb(255, 241, 232))
    color.setColor(2, color.rgb(255, 0, 77))
    color.setColor(3, color.rgb(255, 119, 168))
    color.setColor(4, color.rgb(255, 160, 87))
    color.setColor(5, color.rgb(255, 236, 39))
    color.setColor(6, color.rgb(0, 135, 114))
    color.setColor(7, color.rgb(0, 228, 54))
    color.setColor(8, color.rgb(33, 49, 94))
    color.setColor(9, color.rgb(41, 173, 255))
    color.setColor(10, color.rgb(126, 37, 83))
    color.setColor(11, color.rgb(194, 195, 199))
    color.setColor(12, color.rgb(131, 118, 156))
    color.setColor(13, color.rgb(250, 204, 135))
    color.setColor(14, color.rgb(233, 118, 83))
    color.setColor(15, color.rgb(0, 0, 0))
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(Player_isLocked) && Game_doesPlayerExist) {
        Control_LastPressedButtonB = game.runtime()
        UI_Sprite_ButtonB.setImage(assets.image`UI_ButtonsFrame3`)
    }
})
function Play_WeaponBreak () {
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 1374, 1286, 36, 0, 200, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    music.play(music.createSoundEffect(WaveShape.Noise, 1857, 1506, 142, 0, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    scene.cameraShake(4, 200)
}
function Game_FadeToBlack (_Time: number) {
    timer.background(function () {
        timer.after(_Time / 5, function () {
            Game_Brightness75()
            timer.after(_Time / 5, function () {
                Game_Brightness50()
                timer.after(_Time / 5, function () {
                    Game_Brightness25()
                    timer.after(_Time / 5, function () {
                        Game_Brightness10()
                        timer.after(_Time / 5, function () {
                            color.setPalette(
                            color.Black
                            )
                        })
                    })
                })
            })
        })
    })
}
function Game_FadeToBlack2 (_Time: number) {
    timer.background(function () {
        timer.after(_Time / 5, function () {
            Game_Brightness76()
            timer.after(_Time / 5, function () {
                Game_Brightness50()
                timer.after(_Time / 5, function () {
                    Game_Brightness25()
                    timer.after(_Time / 5, function () {
                        Game_Brightness10()
                        timer.after(_Time / 5, function () {
                            color.setPalette(
                            color.Black
                            )
                        })
                    })
                })
            })
        })
    })
}
function Player_ShadowImage () {
    if (Player_CurrentState == 2 || Player_CurrentState == 3) {
        if (Player_Sprite_JumpController.y > 102) {
            Player_Sprite_VisualsShadow.setImage(assets.image`Shadow1_0`)
        } else if (Player_Sprite_JumpController.y > 86) {
            Player_Sprite_VisualsShadow.setImage(assets.image`Shadow1_1`)
        } else if (Player_Sprite_JumpController.y > 70) {
            Player_Sprite_VisualsShadow.setImage(assets.image`Shadow1_2`)
        } else {
            Player_Sprite_VisualsShadow.setImage(assets.image`Shadow1_3`)
        }
    } else {
        Player_Sprite_VisualsShadow.setImage(assets.image`Shadow1_0`)
    }
}
function Level_Unload () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Text)
    sprites.destroyAllSpritesOfKind(SpriteKind.StatusBar)
    sprites.destroyAllSpritesOfKind(SpriteKind.Interact)
    sprites.destroyAllSpritesOfKind(SpriteKind.Helmet)
    sprites.destroyAllSpritesOfKind(SpriteKind.Level)
    sprites.destroyAllSpritesOfKind(SpriteKind.Slime)
    sprites.destroyAllSpritesOfKind(SpriteKind.Dummy)
    sprites.destroyAllSpritesOfKind(SpriteKind.UserInterface)
    sprites.destroyAllSpritesOfKind(SpriteKind.PickupBox)
    sprites.destroyAllSpritesOfKind(SpriteKind.MiniMenu)
    sprites.destroyAllSpritesOfKind(SpriteKind.Introduction)
    sprites.destroyAllSpritesOfKind(SpriteKind.Potion)
    sprites.destroyAllSpritesOfKind(SpriteKind.WeaponPickup)
    Game_doesPlayerExist = false
}
function Weapon_Fire_PeaShooter (_Direction: number) {
    if (UI_Sprite_AmmoBar.value > 100 / Setting_Weapon_ClipSize_Peashooter) {
        UI_Sprite_AmmoBar.value += -99 / Setting_Weapon_ClipSize_Peashooter
        Weapon_Bullet_TinyLaser(_Direction, Setting_Weapon_BulletVelocity_Peashooter, Setting_Weapon_Inaccuracy_Peashooter, Setting_Weapon_Damage_Peashooter)
        Play_Weapon_Peashooter()
        Weapon_LastAttack = game.runtime()
    } else if (Control_JustPressedButtonA) {
        Play_Weapon_PeashooterEmpty()
    }
}
function Play_Player_Land () {
    music.play(music.createSoundEffect(
    WaveShape.Sine,
    196,
    1,
    Setting_Sound_EffectsVolume * Setting_Sound_SmallEffectsMultiplier,
    0,
    150,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.InBackground)
}
function Weapon_UpdateProjectileCollision () {
    for (let value of sprites.allOfKind(SpriteKind.Projectile)) {
        for (let value2 of sprites.allOfKind(SpriteKind.Slime)) {
            if (value.x < value2.x + Setting_Enemy_SlimeHitboxScale + Setting_Weapon_BulletHitboxSize && value.x > value2.x - Setting_Enemy_SlimeHitboxScale - Setting_Weapon_BulletHitboxSize) {
                if (value.y + Setting_Weapon_BulletHeightOffset / 2 < value2.y + Setting_Enemy_SlimeHitboxScale - Setting_Game_3248VerticalOffset + Setting_Weapon_BulletHitboxSize && value.y + Setting_Weapon_BulletHeightOffset / 2 > value2.y - Setting_Enemy_SlimeHitboxScale - Setting_Game_3248VerticalOffset - Setting_Weapon_BulletHitboxSize) {
                    if (sprites.readDataNumber(value, "vertical") >= sprites.readDataNumber(value2, "vertical") - Setting_Enemy_SlimeHitboxScale && sprites.readDataNumber(value, "vertical") <= sprites.readDataNumber(value2, "vertical") + Setting_Enemy_SlimeHitboxScale) {
                        sprites.destroy(value)
                        Enemy_DamageSlime(value2, sprites.readDataNumber(value, "CurrentHealth"))
                    }
                }
            }
        }
    }
}
function Play_Player_PickupHelmet () {
    music.play(music.createSoundEffect(
    WaveShape.Triangle,
    508,
    5000,
    Setting_Sound_EffectsVolume,
    0,
    150,
    SoundExpressionEffect.None,
    InterpolationCurve.Logarithmic
    ), music.PlaybackMode.InBackground)
}
function Weapon_Reload_Burst () {
    if (UI_Sprite_AmmoBar.value < 99) {
        if (game.runtime() > Weapon_LastAttack + Setting_Weapon_ReloadWait_Peashooter) {
            UI_Sprite_AmmoBar.value = 100
            Play_Weapon_BurstReload()
        }
    }
}
function Settings_PlayerInteraction () {
    Setting_Player_InvinvibilityFramesLength = 2500
    Setting_Interact_MaxDistance = 35
}
function Play_Player_Walk1 () {
    music.play(music.createSoundEffect(
    WaveShape.Sine,
    375,
    100,
    Setting_Sound_EffectsVolume * Setting_Sound_SmallEffectsMultiplier,
    0,
    50,
    SoundExpressionEffect.None,
    InterpolationCurve.Logarithmic
    ), music.PlaybackMode.InBackground)
}
function Settings_Weapons () {
    Setting_Weapon_BulletHeightOffset = 12
    Setting_Weapon_BulletLateralOffset = 12
    Setting_Weapon_BulletHitboxSize = 2
    Settings_Peashooter()
    Settings_BurstRifle()
}
function NormalizeY (_x: number, _y: number) {
    if (_y != 0) {
        return _y / Math_Vector2Magnitude(_x, _y)
    } else {
        return 0
    }
}
function UI_UpdateUserInterface () {
    UI_UpdateButtons()
    UI_UpdateButtonIcons()
    UI_UpdateHealth()
}
function Level_Load (_level: number) {
    if (_level == 0) {
        scene.setBackgroundColor(7)
        tiles.setCurrentTilemap(tilemap`level2`)
        Level_Sprite_Ship = sprites.create(assets.image`Lobby_Ship0`, SpriteKind.Level)
        animation.runImageAnimation(
        Level_Sprite_Ship,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(Level_Sprite_Ship, tiles.getTileLocation(3, 6))
        Level_Sprite_Ship.x += -8
        Level_Sprite_Ship.y += -8
        Level_Sprite_Ship.z = Level_Sprite_Ship.y + 46
    } else if (_level == 1) {
        scene.setBackgroundColor(9)
        tiles.setCurrentTilemap(tilemap`level1`)
        Level_CreateMoneys()
    }
    Level_Walls()
    Level_Pickups()
    Level_PlayerChange()
    Level_Wizard()
    Level_ControlsChange()
    Level_Teleporter()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(Player_isLocked) && Game_doesPlayerExist) {
        Control_LastPressedButtonA = game.runtime()
        UI_Sprite_ButtonA.setImage(assets.image`UI_ButtonsFrame2`)
        if (Player_CurrentInteractState == 1) {
            Interact_Interact()
        } else {
            Control_JustPressedButtonA = true
        }
    }
})
function TitleScreen () {
    mySprite = sprites.create(assets.image`TitleScreen`, SpriteKind.Introduction)
    Game_FadeFromBlack2(500)
    timer.after(1500, function () {
        mySprite = sprites.create(assets.image`Titlescreen_Atostart`, SpriteKind.Introduction)
    })
}
function WhiskyjackIntro () {
    Game_FadeFromBlack2(500)
    music.play(music.createSoundEffect(WaveShape.Triangle, 1, 167, 11, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    Intro_Background = sprites.create(assets.image`Intro_Backdrop`, SpriteKind.Introduction)
    Intro_Background.setPosition(-95, 0)
    Intro_Background.setVelocity(20, 20)
    Intro_Bird = sprites.create(assets.image`Intro_Bird_Sleeping`, SpriteKind.Introduction)
    Intro_Bird.setPosition(45, 38)
    Intro_Logo = sprites.create(assets.image`Intro_Whiskyjack`, SpriteKind.Introduction)
    Intro_Logo.setPosition(78, 66)
    Intro_Logo2 = sprites.create(assets.image`Intro_Interactive`, SpriteKind.Introduction)
    Intro_Logo2.setPosition(78, 66)
    timer.after(2500, function () {
        Game_FadeToBlack2(500)
        timer.after(750, function () {
            Level_Unload()
            LeaveTitlescreen()
        })
    })
}
function Interact_ControlControlsMenu2 () {
    Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Down)
    Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Down)
    Menu_Sprite_PlayerControlsScheme.setImage(assets.image`Menu_ControlsScheme_1`)
    Menu_Sprite_Selector.y += 28
    Menu_ChangeControls.onButtonPressed(controller.A, function (selection, selectedIndex) {
        Menu_ChangeControls.close()
        sprites.destroy(Menu_Sprite_PlayerControlsMenu)
        sprites.destroy(Menu_Sprite_PlayerControlsScheme)
        sprites.destroy(Menu_Sprite_Selector)
        Play_Menu_Select()
        Game_SetControls(selectedIndex)
        pause(100)
        WhiskyjackIntro()
    })
    Menu_ChangeControls.onButtonPressed(controller.up, function (selection, selectedIndex) {
        if (selectedIndex > 0) {
            Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Up)
            Menu_Sprite_Selector.y += -14
            Play_Menu_Change()
            if (selectedIndex == 3) {
                Menu_Sprite_PlayerControlsScheme.setImage(assets.image`Menu_ControlsScheme_1`)
            } else if (selectedIndex == 2) {
                Menu_Sprite_PlayerControlsScheme.setImage(assets.image`Menu_ControlsScheme_4`)
            } else if (selectedIndex == 4) {
                Menu_Sprite_PlayerControlsScheme.setImage(assets.image`Menu_ControlsScheme_2`)
            } else {
                Menu_Sprite_PlayerControlsScheme.setImage(assets.image`Menu_ControlsScheme_5`)
            }
        }
    })
    Menu_ChangeControls.onButtonPressed(controller.down, function (selection, selectedIndex) {
        if (selectedIndex < 4) {
            Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Down)
            Menu_Sprite_Selector.y += 14
            Play_Menu_Change()
            if (selectedIndex == 2) {
                Menu_Sprite_PlayerControlsScheme.setImage(assets.image`Menu_ControlsScheme_2`)
            } else if (selectedIndex == 1) {
                Menu_Sprite_PlayerControlsScheme.setImage(assets.image`Menu_ControlsScheme_1`)
            } else if (selectedIndex == 3) {
                Menu_Sprite_PlayerControlsScheme.setImage(assets.image`Menu_ControlsScheme_3`)
            } else {
                Menu_Sprite_PlayerControlsScheme.setImage(assets.image`Menu_ControlsScheme_4`)
            }
        }
    })
}
function Settings_Enemies () {
    Setting_Enemy_SpawnVerticalOffset = 80
    Setting_Enemy_SpawnHorizontalOffset = 100
    Setting_Enemy_DespawnOffset = 0
    Setting_Enemy_SlimeJumpDelay = 5000
    Setting_Enemy_SlimeJumpMoveSpeed = 50
    Setting_Enemy_SlimeHitboxScale = 10
    Setting_Enemy_SlimeHealth = 90
}
function Play_Player_PickupMoney () {
    music.play(music.createSoundEffect(
    WaveShape.Triangle,
    1286,
    1242,
    Setting_Sound_EffectsVolume,
    0,
    50,
    SoundExpressionEffect.None,
    InterpolationCurve.Logarithmic
    ), music.PlaybackMode.UntilDone)
    music.play(music.createSoundEffect(
    WaveShape.Triangle,
    2472,
    2515,
    Setting_Sound_EffectsVolume,
    0,
    200,
    SoundExpressionEffect.None,
    InterpolationCurve.Logarithmic
    ), music.PlaybackMode.InBackground)
}
function Pickup_CreateHealth (_X: number, _Y: number) {
    Pickup_Sprite_Money = sprites.create(assets.image`Healing_0`, SpriteKind.Potion)
    Pickup_Sprite_Money.lifespan = 10000
    sprites.setDataNumber(Pickup_Sprite_Money, "moneyPoints", 20)
    Pickup_Sprite_Money.setPosition(_X, _Y)
    Pickup_Sprite_Money.z = Pickup_Sprite_Money.y
}
function Play_Player_Jump () {
    music.play(music.createSoundEffect(
    WaveShape.Square,
    400,
    600,
    Setting_Sound_EffectsVolume,
    0,
    100,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.InBackground)
}
function _3248EnemyCollison (_Enemy1: Sprite, _Enemy2: Sprite, _Amount: number) {
    _Enemy1.x += _Amount * ((_Enemy1.x - _Enemy2.x) / Math_Vector2Magnitude(_Enemy1.x - _Enemy2.x, _Enemy1.y - _Enemy2.y))
    _Enemy1.y += _Amount * ((_Enemy1.y - _Enemy2.y) / Math_Vector2Magnitude(_Enemy1.x - _Enemy2.x, _Enemy1.y - _Enemy2.y))
    _Enemy2.x += _Amount * ((_Enemy2.x - _Enemy1.x) / Math_Vector2Magnitude(_Enemy2.x - _Enemy1.x, _Enemy2.y - _Enemy1.y))
    _Enemy2.y += _Amount * ((_Enemy2.y - _Enemy1.y) / Math_Vector2Magnitude(_Enemy2.x - _Enemy1.x, _Enemy2.y - _Enemy1.y))
}
function Pickup_CreateWeapon (_X: number, _Y: number) {
    Pickup_Sprite_Money = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 3 . . . . . . . 3 . . . . . 
        . . 3 . . . . . . . 3 . . . . . 
        . . 3 . . . . . . . 3 . . . . . 
        . . 3 . . . . . . . 3 . . . . . 
        . . . 3 . . . . . . 3 . . . . . 
        . . . 3 . . . . . . 3 . . . . . 
        . . . 3 . . . . . . . 3 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 3 3 . . . . . . . 3 3 3 . . 
        . . . 3 3 3 3 3 3 3 3 3 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.WeaponPickup)
    Pickup_Sprite_Money.lifespan = 10000
    sprites.setDataNumber(Pickup_Sprite_Money, "moneyPoints", 1)
    Pickup_Sprite_Money.setPosition(_X, _Y)
    Pickup_Sprite_Money.z = Pickup_Sprite_Money.y
}
function Player_PlayerImage_Jump () {
    if (Player_hasJustJumped) {
        Player_hasJustJumped = false
        Player_isFootRight = !(Player_isFootRight)
        Player_isFootOut = true
    }
    if (Player_isFootRight) {
        Player_PlayerImage_Right()
    } else {
        Player_PlayerImage_Left()
    }
}
function Player_UpdateJumping () {
    if (game.runtime() < Control_LastPressedButtonB + Setting_Controller_InputBufferLength && Player_Sprite_JumpController.isHittingTile(CollisionDirection.Bottom)) {
        Player_hasJustJumped = true
        Player_LastJumped = game.runtime()
        Player_Sprite_JumpController.y += 1
        Player_Sprite_JumpController.vy = Setting_Player_JumpVelocity * -1
        Play_Player_Jump()
        UI_ShakeButtonB()
    }
    if (!(Game_isTeleporting)) {
        if ((!(controller.B.isPressed()) || Player_Sprite_JumpController.vy > Setting_Player_FallThreshold) && !(Player_Sprite_JumpController.isHittingTile(CollisionDirection.Bottom))) {
            Player_Sprite_JumpController.ay = Setting_Player_FallAcceleration
        } else {
            Player_Sprite_JumpController.ay = Setting_Player_JumpAcceleration
        }
    } else {
        Player_Sprite_JumpController.ay = -0.1 * Setting_Player_FallAcceleration
    }
}
function Weapon_Reload_PeaShooter () {
    if (UI_Sprite_AmmoBar.value < 99) {
        if (game.runtime() > Weapon_LastAttack + Setting_Weapon_ReloadWait_Peashooter) {
            if (game.runtime() > Weapon_LastReload + Setting_Weapon_ReloadSpeed_Peashooter) {
                Weapon_LastReload = game.runtime()
                UI_Sprite_AmmoBar.value += 99 / Setting_Weapon_ClipSize_Peashooter
            }
        }
    }
}
function Player_AirMovement () {
    if (Player_Sprite_MoveController.vx > dx_Normalized() * Player_TargetSpeed) {
        Player_Sprite_MoveController.vx += Setting_Player_GroundAcceleration * Setting_Player_AirAccelMultiplier * -1
    } else if (Player_Sprite_MoveController.vx < dx_Normalized() * Player_TargetSpeed) {
        Player_Sprite_MoveController.vx += Setting_Player_GroundAcceleration * Setting_Player_AirAccelMultiplier
    }
    if (Player_Sprite_MoveController.vy > dy_Normalized() * Player_TargetSpeed) {
        Player_Sprite_MoveController.vy += Setting_Player_GroundAcceleration * Setting_Player_AirAccelMultiplier * -1
    } else if (Player_Sprite_MoveController.vy < dy_Normalized() * Player_TargetSpeed) {
        Player_Sprite_MoveController.vy += Setting_Player_GroundAcceleration * Setting_Player_AirAccelMultiplier
    }
}
function Enemy_UpdateSlimesDespawns () {
    for (let value of sprites.allOfKind(SpriteKind.Slime)) {
        if (value.x < Player_Sprite_VisualsPlayer.x + (Setting_Enemy_SpawnHorizontalOffset + Setting_Enemy_DespawnOffset) && value.x > Player_Sprite_MoveController.x - (Setting_Enemy_SpawnHorizontalOffset - Setting_Enemy_DespawnOffset)) {
            if (value.y - Setting_Game_3248VerticalOffset < Player_Sprite_VisualsPlayer.y + (Setting_Enemy_SpawnVerticalOffset + Setting_Enemy_DespawnOffset) && value.y - Setting_Game_3248VerticalOffset > Player_Sprite_MoveController.y - (Setting_Enemy_SpawnVerticalOffset - Setting_Enemy_DespawnOffset)) {
                value.lifespan = 1500
            }
        }
    }
}
function Pickup_CreatePickup (_X: number, _Y: number) {
    if (Player_CurrentWeapon == 0) {
        if (Math.percentChance(70)) {
            Pickup_CreateMoney(_X, _Y)
        } else if (Math.percentChance(66)) {
            Pickup_CreateWeapon(_X, _Y)
        } else {
            Pickup_CreateHealth(_X, _Y)
        }
    } else {
        if (Math.percentChance(80)) {
            Pickup_CreateMoney(_X, _Y)
        } else if (Math.percentChance(33)) {
            Pickup_CreateWeapon(_X, _Y)
        } else {
            Pickup_CreateHealth(_X, _Y)
        }
    }
}
function Game_StartGame () {
    Game_EnemiesDefeated = 0
    timer.after(1000, function () {
        info.setScore(0)
        UI_Sprite_GameStart = sprites.create(assets.image`Game_GameStart`, SpriteKind.UserInterface)
        UI_Sprite_GameStart.setFlag(SpriteFlag.RelativeToCamera, true)
        UI_Sprite_GameStart.setFlag(SpriteFlag.Ghost, true)
        UI_Sprite_GameStart.z = Setting_UI_InterfaceZ
        Play_Game_Start1()
        timer.after(1250, function () {
            UI_Sprite_GameStart.setImage(assets.image`Game_GameStart0`)
            Play_Game_Start1()
            timer.after(1250, function () {
                Play_Game_Start2()
                UI_Sprite_GameStart.setImage(assets.image`Game_GameStart1`)
                UI_Sprite_GameStart.ay = -100
                UI_Sprite_GameStart.lifespan = 2000
                Player_isLocked = false
                Game_isPlaying = true
                info.startCountdown(300)
            })
        })
    })
}
function Weapon_Shoot () {
    if (!(Player_isLocked)) {
        if (Player_CurrentWeapon == 0) {
            if (controller.A.isPressed() && game.runtime() > Weapon_LastAttack + Setting_Weapon_Firerate_Peashooter) {
                if (Player_CurrentState != 2 && Math_GetDirection8(dx_Stabilized(), dy_Stabilized(), 0.2) != 0) {
                    Weapon_Fire_PeaShooter(Math_GetDirection8(dx_Stabilized(), dy_Stabilized(), 0.2))
                } else {
                    Weapon_Fire_PeaShooter(Player_CurrentDirection)
                }
            }
            Control_JustPressedButtonA = false
        } else if (Player_CurrentWeapon == 1) {
            if (controller.A.isPressed() && game.runtime() > Weapon_LastAttack + Setting_Weapon_ReloadWait_Burst) {
                if (Player_CurrentState != 2 && Math_GetDirection8(dx_Stabilized(), dy_Stabilized(), 0.2) != 0) {
                    Weapon_Fire_Burst(Math_GetDirection8(dx_Stabilized(), dy_Stabilized(), 0.2))
                } else {
                    Weapon_Fire_Burst(Player_CurrentDirection)
                }
            }
            Control_JustPressedButtonA = false
        } else {
        	
        }
    }
}
function Player_PlayerImage_Left () {
    if (Player_hasHelmet) {
        Player_Sprite_VisualsHelmet.setImage(assets.image`Player_Helmet_2`)
    } else {
        Player_Sprite_VisualsHelmet.setImage(assets.image`Player_Helmet_0`)
    }
    if (Player_isMale) {
        if (Player_CurrentDirection == 1) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player_0_2`)
        } else if (Player_CurrentDirection == 2) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player_1_2`)
        } else if (Player_CurrentDirection == 3) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player_2_2`)
        } else if (Player_CurrentDirection == 4) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player_3_2`)
        } else if (Player_CurrentDirection == 5 || Player_CurrentDirection == 0) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player_4_2`)
        } else if (Player_CurrentDirection == 6) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player_5_2`)
        } else if (Player_CurrentDirection == 7) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player_6_2`)
        } else if (Player_CurrentDirection == 8) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player_7_2`)
        }
    } else {
        if (Player_CurrentDirection == 1) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player2_0_2`)
        } else if (Player_CurrentDirection == 2) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player2_1_2`)
        } else if (Player_CurrentDirection == 3) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player2_2_2`)
        } else if (Player_CurrentDirection == 4) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player2_3_2`)
        } else if (Player_CurrentDirection == 5 || Player_CurrentDirection == 0) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player2_4_2`)
        } else if (Player_CurrentDirection == 6) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player2_5_2`)
        } else if (Player_CurrentDirection == 7) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player2_6_2`)
        } else if (Player_CurrentDirection == 8) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player2_7_2`)
        }
    }
}
function UI_CreateWeapon () {
    Player_CurrentAmmo = 0
    Player_CurrentWeapon = 0
    UI_Sprite_WeaponFrame = sprites.create(assets.image`UI_WeaponFrame`, SpriteKind.UserInterface)
    UI_Sprite_WeaponFrame.setFlag(SpriteFlag.Ghost, true)
    UI_Sprite_WeaponFrame.setFlag(SpriteFlag.RelativeToCamera, true)
    UI_Sprite_WeaponFrame.setPosition(26, 107)
    UI_Sprite_WeaponFrame.z = Setting_UI_InterfaceZ
    UI_Sprite_CurrentWeapon = sprites.create(assets.image`UI_Weapon_0`, SpriteKind.UserInterface)
    UI_Sprite_CurrentWeapon.setFlag(SpriteFlag.Ghost, true)
    UI_Sprite_CurrentWeapon.setFlag(SpriteFlag.RelativeToCamera, true)
    UI_Sprite_CurrentWeapon.setPosition(26, 107)
    UI_Sprite_CurrentWeapon.z = Setting_UI_InterfaceZ + 10
    UI_Sprite_AmmoBar = statusbars.create(31, 4, StatusBarKind.Magic)
    UI_Sprite_AmmoBar.setColor(9, 8)
    UI_Sprite_AmmoBar.setPosition(21, 96)
    UI_Sprite_AmmoBar.z = Setting_UI_InterfaceZ - 10
    UI_Sprite_AmmoCount = textsprite.create("99", 15, 9)
    UI_Sprite_AmmoCount.setMaxFontHeight(5)
    UI_Sprite_AmmoCount.setFlag(SpriteFlag.Ghost, true)
    UI_Sprite_AmmoCount.setFlag(SpriteFlag.RelativeToCamera, true)
    UI_Sprite_AmmoCount.setPosition(43, 113)
    UI_Sprite_AmmoCount.z = Setting_UI_InterfaceZ + 20
}
function Play_KillSlime () {
    music.play(music.createSoundEffect(
    WaveShape.Noise,
    1418,
    1,
    255,
    0,
    100,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.InBackground)
}
function Interact_PlaceIcon () {
    if (Interact_WhoIsClosest() == 0) {
        Player_Sprite_VisualsInteract.setFlag(SpriteFlag.Invisible, true)
    } else {
        Player_Sprite_VisualsInteract.setFlag(SpriteFlag.Invisible, false)
        if (Interact_WhoIsClosest() == 1) {
            Player_Sprite_VisualsInteract.setImage(assets.image`UI_Icon_6_0`)
            Player_Sprite_VisualsInteract.setPosition(Level_Sprite_PlayerChange.x, Level_Sprite_PlayerChange.y - 21)
            Player_Sprite_VisualsInteract.z = Level_Sprite_PlayerChange.z
        } else if (Interact_WhoIsClosest() == 2) {
            Player_Sprite_VisualsInteract.setImage(assets.image`UI_Icon_1_0`)
            Player_Sprite_VisualsInteract.setPosition(Level_Sprite_Wizard.x, Level_Sprite_Wizard.y - 21)
            Player_Sprite_VisualsInteract.z = Level_Sprite_Wizard.z
        } else if (Interact_WhoIsClosest() == 3) {
            Player_Sprite_VisualsInteract.setImage(assets.image`UI_Icon_4_0`)
            Player_Sprite_VisualsInteract.setPosition(Level_Sprite_Teleporter.x, Level_Sprite_Teleporter.y - 30)
            Player_Sprite_VisualsInteract.z = Level_Sprite_Teleporter.y
            if (Math.percentChance(50)) {
                extraEffects.createSpreadEffectAt(Effect_Level_Teleporter, Level_Sprite_Teleporter.x, Level_Sprite_Teleporter.y + 0, 10, 16, 1)
            }
        } else if (Interact_WhoIsClosest() == 4) {
            Player_Sprite_VisualsInteract.setImage(assets.image`UI_Icon_5_0`)
            Player_Sprite_VisualsInteract.setPosition(Level_Sprite_Computer.x, Level_Sprite_Computer.y - 24)
            Player_Sprite_VisualsInteract.z = Level_Sprite_Computer.z
        }
    }
}
function Level_Wizard () {
    for (let value of tiles.getTilesByType(assets.tile`transparency16`)) {
        Level_Sprite_Wizard = sprites.create(assets.image`Wizard_5_0`, SpriteKind.Interact)
        tiles.placeOnTile(Level_Sprite_Wizard, tiles.getTileLocation(value.column, value.row))
        Level_Sprite_Wizard.y += -18
        tiles.setWallAt(tiles.getTileLocation(value.column, value.row), true)
        Level_Sprite_Wizard.z = value.y
        sprites.setDataNumber(Level_Sprite_Wizard, "InteractIndex", 2)
    }
}
function UI_UpdateWeapon () {
    if (Player_CurrentWeapon != 0 && Player_CurrentAmmo <= 0) {
        Player_CurrentWeapon = 0
        UI_Sprite_AmmoBar.value = 100
        Play_WeaponBreak()
    }
    if (Player_CurrentWeapon == 0) {
        UI_Sprite_AmmoCount.setFlag(SpriteFlag.Invisible, true)
        UI_Sprite_CurrentWeapon.setImage(assets.image`UI_Weapon_0`)
    } else if (Player_CurrentWeapon == 1) {
        UI_Sprite_AmmoCount.setFlag(SpriteFlag.Invisible, false)
        UI_Sprite_CurrentWeapon.setImage(assets.image`UI_Weapon_1`)
    } else {
    	
    }
    UI_Sprite_AmmoCount.setText("" + convertToText(Math.trunc(Player_CurrentAmmo / 10)) + convertToText(Player_CurrentAmmo % 10))
}
function Settings_Peashooter () {
    Setting_Weapon_ClipSize_Peashooter = 12
    Setting_Weapon_ReloadWait_Peashooter = 250
    Setting_Weapon_ReloadSpeed_Peashooter = 50
    Setting_Weapon_Damage_Peashooter = 21
    Setting_Weapon_BulletVelocity_Peashooter = 200
    Setting_Weapon_Firerate_Peashooter = 150
    Setting_Weapon_Inaccuracy_Peashooter = 20
}
function Game_FadeFromBlack (_Time: number) {
    timer.background(function () {
        color.setPalette(
        color.Black
        )
        timer.after(_Time / 5, function () {
            Game_Brightness10()
            timer.after(_Time / 5, function () {
                Game_Brightness25()
                timer.after(_Time / 5, function () {
                    Game_Brightness50()
                    timer.after(_Time / 5, function () {
                        Game_Brightness75()
                        timer.after(_Time / 5, function () {
                            Game_Brightness100()
                        })
                    })
                })
            })
        })
    })
}
function Game_Brightness75 () {
    color.setColor(1, color.rgb(194, 195, 199))
    color.setColor(2, color.rgb(255, 0, 77))
    color.setColor(3, color.rgb(255, 119, 168))
    color.setColor(4, color.rgb(233, 118, 83))
    color.setColor(5, color.rgb(255, 160, 87))
    color.setColor(6, color.rgb(0, 135, 114))
    color.setColor(7, color.rgb(0, 228, 54))
    color.setColor(8, color.rgb(33, 49, 94))
    color.setColor(9, color.rgb(0, 135, 114))
    color.setColor(10, color.rgb(126, 37, 83))
    color.setColor(11, color.rgb(131, 118, 156))
    color.setColor(12, color.rgb(33, 49, 94))
    color.setColor(13, color.rgb(255, 160, 87))
    color.setColor(14, color.rgb(233, 118, 83))
    color.setColor(15, color.rgb(0, 0, 0))
}
function Player_PlayerImage_Idle () {
    if (Player_hasHelmet) {
        Player_Sprite_VisualsHelmet.setImage(assets.image`Player_Helmet_1`)
    } else {
        Player_Sprite_VisualsHelmet.setImage(assets.image`Player_Helmet_0`)
    }
    if (Player_isMale) {
        if (Player_CurrentDirection == 1) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player_0_0`)
        } else if (Player_CurrentDirection == 2) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player_1_0`)
        } else if (Player_CurrentDirection == 3) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player_2_0`)
        } else if (Player_CurrentDirection == 4) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player_3_0`)
        } else if (Player_CurrentDirection == 5 || Player_CurrentDirection == 0) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player_4_0`)
        } else if (Player_CurrentDirection == 6) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player_5_0`)
        } else if (Player_CurrentDirection == 7) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player_6_0`)
        } else if (Player_CurrentDirection == 8) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player_7_0`)
        }
    } else {
        if (Player_CurrentDirection == 1) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player2_0_0`)
        } else if (Player_CurrentDirection == 2) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player2_1_0`)
        } else if (Player_CurrentDirection == 3) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player2_2_0`)
        } else if (Player_CurrentDirection == 4) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player2_3_0`)
        } else if (Player_CurrentDirection == 5 || Player_CurrentDirection == 0) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player2_4_0`)
        } else if (Player_CurrentDirection == 6) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player2_5_0`)
        } else if (Player_CurrentDirection == 7) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player2_6_0`)
        } else if (Player_CurrentDirection == 8) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player2_7_0`)
        }
    }
}
function Sprite_GetDirection8 (_Sprite: Sprite, _Minimum: number) {
    return Math_GetDirection8(_Sprite.vx, _Sprite.vy, _Minimum)
}
function Play_Weapon_Peashooter () {
    music.play(music.createSoundEffect(WaveShape.Triangle, 1600, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
}
function Weapon_UpdateAmmo () {
    if (Player_CurrentWeapon == 0) {
        Weapon_Reload_PeaShooter()
    } else if (Player_CurrentWeapon == 1) {
        Weapon_Reload_Burst()
    } else {
    	
    }
}
function dx_Stabilized () {
    if (Player_isLocked) {
        return 0
    } else {
        return Math.trunc(controller.dx(50))
    }
}
function Game_Brightness10 () {
    color.setColor(1, color.rgb(33, 49, 94))
    color.setColor(2, color.rgb(0, 0, 0))
    color.setColor(3, color.rgb(126, 37, 83))
    color.setColor(4, color.rgb(0, 0, 0))
    color.setColor(5, color.rgb(126, 37, 83))
    color.setColor(6, color.rgb(0, 0, 0))
    color.setColor(7, color.rgb(0, 0, 0))
    color.setColor(8, color.rgb(0, 0, 0))
    color.setColor(9, color.rgb(0, 0, 0))
    color.setColor(10, color.rgb(0, 0, 0))
    color.setColor(11, color.rgb(33, 49, 94))
    color.setColor(12, color.rgb(0, 0, 0))
    color.setColor(13, color.rgb(126, 37, 83))
    color.setColor(14, color.rgb(0, 0, 0))
    color.setColor(15, color.rgb(0, 0, 0))
}
function UI_UpdateButtons () {
    if (controller.A.isPressed()) {
        UI_Sprite_ButtonA.setImage(assets.image`UI_ButtonsFrame2`)
    } else {
        UI_Sprite_ButtonA.setImage(assets.image`UI_ButtonsFrame0`)
    }
    if (controller.B.isPressed()) {
        UI_Sprite_ButtonB.setImage(assets.image`UI_ButtonsFrame3`)
    } else {
        UI_Sprite_ButtonB.setImage(assets.image`UI_ButtonsFrame1`)
    }
}
function Player_UpdateState () {
    if (Player_isLocked) {
        Player_CurrentState = 4
    } else {
        if (!(Player_Sprite_JumpController.isHittingTile(CollisionDirection.Bottom))) {
            Player_CurrentState = 2
        } else {
            if (Player_CurrentState == 2 || Player_CurrentState == 3) {
                Play_Player_Land()
            }
            if (Math_Vector2Magnitude(Player_Sprite_MoveController.vx, Player_Sprite_MoveController.vy) > 5) {
                Player_CurrentState = 1
            } else {
                Player_CurrentState = 0
            }
        }
    }
}
function Interact_Interact () {
    if (Interact_WhoIsClosest() == 0) {
    	
    } else if (Interact_WhoIsClosest() == 1) {
        Interact_PlayerChangeMenu()
    } else if (Interact_WhoIsClosest() == 2) {
        Interact_WizardDialog()
    } else if (Interact_WhoIsClosest() == 3) {
        Interact_TeleportToGame()
    } else if (Interact_WhoIsClosest() == 4) {
        Interact_ChangeControlsMenu()
    }
}
function Settings_Controller () {
    Setting_Controller_InputBufferLength = 150
}
function Play_Player_PickupWeapon () {
    music.play(music.createSoundEffect(
    WaveShape.Triangle,
    508,
    5000,
    Setting_Sound_EffectsVolume,
    0,
    150,
    SoundExpressionEffect.None,
    InterpolationCurve.Logarithmic
    ), music.PlaybackMode.InBackground)
}
function Player_GroundMovement () {
    if (Player_Sprite_MoveController.vx > dx_Normalized() * Player_TargetSpeed) {
        Player_Sprite_MoveController.vx += Setting_Player_GroundAcceleration * -1
    } else if (Player_Sprite_MoveController.vx < dx_Normalized() * Player_TargetSpeed) {
        Player_Sprite_MoveController.vx += Setting_Player_GroundAcceleration
    }
    if (Player_Sprite_MoveController.vy > dy_Normalized() * Player_TargetSpeed) {
        Player_Sprite_MoveController.vy += Setting_Player_GroundAcceleration * -1
    } else if (Player_Sprite_MoveController.vy < dy_Normalized() * Player_TargetSpeed) {
        Player_Sprite_MoveController.vy += Setting_Player_GroundAcceleration
    }
}
function Weapon_Bullet_TinyLaser (_Direction: number, _Velocity: number, _Inaccuracy: number, _Damage: number) {
    Weapon_Sprite_Bullet = sprites.create(assets.image`Laser_2`, SpriteKind.Projectile)
    sprites.setDataNumber(Weapon_Sprite_Bullet, "vertical", sprites.readDataNumber(Player_Sprite_MoveController, "vertical") + Setting_Weapon_BulletHeightOffset / 2)
    sprites.setDataNumber(Weapon_Sprite_Bullet, "CurrentHealth", _Damage)
    Weapon_Sprite_Bullet.lifespan = 5000
    Weapon_Sprite_Bullet.setFlag(SpriteFlag.Ghost, true)
    if (_Direction == 2) {
        Weapon_Sprite_Bullet.setImage(assets.image`Laser_1`)
        Weapon_Sprite_Bullet.setVelocity(0.707 * _Velocity, -0.707 * _Velocity)
        Weapon_Sprite_Bullet.setPosition(Player_Sprite_VisualsPlayer.x + 0.707 * Setting_Weapon_BulletLateralOffset, Player_Sprite_VisualsPlayer.y - Setting_Game_3248VerticalOffset - Setting_Weapon_BulletHeightOffset - 0.707 * Setting_Weapon_BulletLateralOffset)
    } else if (_Direction == 3) {
        Weapon_Sprite_Bullet.setImage(assets.image`Laser_2`)
        Weapon_Sprite_Bullet.setVelocity(_Velocity, randint(-1 * _Inaccuracy, _Inaccuracy))
        Weapon_Sprite_Bullet.setPosition(Player_Sprite_VisualsPlayer.x + Setting_Weapon_BulletLateralOffset, Player_Sprite_VisualsPlayer.y - Setting_Game_3248VerticalOffset - Setting_Weapon_BulletHeightOffset)
    } else if (_Direction == 4) {
        Weapon_Sprite_Bullet.setImage(assets.image`Laser_0`)
        Weapon_Sprite_Bullet.setVelocity(0.707 * _Velocity, 0.707 * _Velocity)
        Weapon_Sprite_Bullet.setPosition(Player_Sprite_VisualsPlayer.x + 0.707 * Setting_Weapon_BulletLateralOffset, Player_Sprite_VisualsPlayer.y - Setting_Game_3248VerticalOffset - Setting_Weapon_BulletHeightOffset + 0.707 * Setting_Weapon_BulletLateralOffset)
    } else if (_Direction == 1) {
        Weapon_Sprite_Bullet.setImage(assets.image`Laser_3`)
        Weapon_Sprite_Bullet.setVelocity(randint(-1 * _Inaccuracy, _Inaccuracy), -1 * _Velocity)
        Weapon_Sprite_Bullet.setPosition(Player_Sprite_VisualsPlayer.x, Player_Sprite_VisualsPlayer.y - Setting_Game_3248VerticalOffset - Setting_Weapon_BulletHeightOffset - Setting_Weapon_BulletLateralOffset)
    } else if (_Direction == 6) {
        Weapon_Sprite_Bullet.setImage(assets.image`Laser_1`)
        Weapon_Sprite_Bullet.setVelocity(-0.707 * _Velocity, 0.707 * _Velocity)
        Weapon_Sprite_Bullet.setPosition(Player_Sprite_VisualsPlayer.x - 0.707 * Setting_Weapon_BulletLateralOffset, Player_Sprite_VisualsPlayer.y - Setting_Game_3248VerticalOffset - Setting_Weapon_BulletHeightOffset + 0.707 * Setting_Weapon_BulletLateralOffset)
    } else if (_Direction == 7) {
        Weapon_Sprite_Bullet.setImage(assets.image`Laser_2`)
        Weapon_Sprite_Bullet.setVelocity(-1 * _Velocity, randint(-1 * _Inaccuracy, _Inaccuracy))
        Weapon_Sprite_Bullet.setPosition(Player_Sprite_VisualsPlayer.x - Setting_Weapon_BulletLateralOffset, Player_Sprite_VisualsPlayer.y - Setting_Game_3248VerticalOffset - Setting_Weapon_BulletHeightOffset)
    } else if (_Direction == 8) {
        Weapon_Sprite_Bullet.setImage(assets.image`Laser_0`)
        Weapon_Sprite_Bullet.setVelocity(-0.707 * _Velocity, -0.707 * _Velocity)
        Weapon_Sprite_Bullet.setPosition(Player_Sprite_VisualsPlayer.x - 0.707 * Setting_Weapon_BulletLateralOffset, Player_Sprite_VisualsPlayer.y - Setting_Game_3248VerticalOffset - Setting_Weapon_BulletHeightOffset - 0.707 * Setting_Weapon_BulletLateralOffset)
    } else {
        Weapon_Sprite_Bullet.setImage(assets.image`Laser_3`)
        Weapon_Sprite_Bullet.setVelocity(randint(-1 * _Inaccuracy, _Inaccuracy), _Velocity)
        Weapon_Sprite_Bullet.setPosition(Player_Sprite_VisualsPlayer.x, Player_Sprite_VisualsPlayer.y - Setting_Game_3248VerticalOffset - Setting_Weapon_BulletHeightOffset + Setting_Weapon_BulletLateralOffset)
    }
    Weapon_Sprite_Bullet.z = Weapon_Sprite_Bullet.y + sprites.readDataNumber(Weapon_Sprite_Bullet, "vertical")
}
function Weapon_Fire_Burst (_Direction: number) {
    if (UI_Sprite_AmmoBar.value > 50) {
        scene.cameraShake(2, 100)
        timer.background(function () {
            for (let index = 0; index < Setting_Weapon_Clipsize_Burst; index++) {
                if (Player_CurrentAmmo > 0) {
                    UI_Sprite_AmmoBar.value += -99 / Setting_Weapon_Clipsize_Burst
                    Weapon_Bullet_TinyLaser(_Direction, Setting_Weapon_BulletVelocity_Burst, Setting_Weapon_Inaccuracy_Burst, Setting_Weapon_Damage_Burst)
                    Play_Weapon_Burst()
                    Weapon_LastAttack = game.runtime()
                    Player_CurrentAmmo += -1
                }
                pause(Setting_Weapon_Firerate_Burst)
            }
        })
    } else if (Control_JustPressedButtonA) {
        Play_Weapon_BurstEmpty()
    }
}
function Player_PlayerZ () {
    Player_Sprite_VisualsPlayer.z = Player_Sprite_MoveController.y
    Player_Sprite_VisualsHelmet.z = Player_Sprite_MoveController.y
}
function Level_ControlsChange () {
    for (let value of tiles.getTilesByType(assets.tile`transparency16`)) {
        Level_Sprite_Computer = sprites.create(assets.image`Computer0`, SpriteKind.Dummy)
        tiles.placeOnTile(Level_Sprite_Computer, tiles.getTileLocation(value.column, value.row))
        Level_Sprite_Computer = sprites.create(assets.image`Computer`, SpriteKind.Interact)
        tiles.placeOnTile(Level_Sprite_Computer, tiles.getTileLocation(value.column, value.row))
        tiles.setWallAt(tiles.getTileLocation(value.column, value.row), true)
        Level_Sprite_Computer.z = value.y
        sprites.setDataNumber(Level_Sprite_Computer, "InteractIndex", 4)
    }
}
info.onCountdownEnd(function () {
    game.gameOver(true)
})
function Player_UpdateMovement () {
    Player_LimitVelocity()
    if (Player_Sprite_JumpController.isHittingTile(CollisionDirection.Bottom)) {
        Player_GroundMovement()
    } else {
        Player_AirMovement()
    }
    Player_ZeroMovement()
    Player_UpdateDirection()
    Player_UpdateStoppingCheck()
    Player_UpdateU()
    Player_LimitVelocity()
}
function KnockbackSpriteFromCoordinates (_Velocity: number, _Sprite: Sprite, _x: number, _y: number) {
    _Sprite.vx += _Velocity * ((_Sprite.x - _x) / Math_Vector2Magnitude(_Sprite.x - _x, _Sprite.y - _y))
    _Sprite.vy += _Velocity * ((_Sprite.y - _y) / Math_Vector2Magnitude(_Sprite.x - _x, _Sprite.y - _y))
}
function Interact_WhoIsClosest () {
    if (sprites.allOfKind(SpriteKind.Interact).length > 0) {
        _WhoisClosest = 0
        _WhatDistance = 0
        for (let value of sprites.allOfKind(SpriteKind.Interact)) {
            if (_WhoisClosest == 0 || _WhatDistance > Math_Vector2Magnitude(Math.abs(Player_Sprite_MoveController.x - value.x), Math.abs(Player_Sprite_MoveController.y - (value.y - Setting_Game_3248VerticalOffset)))) {
                _WhoisClosest = sprites.readDataNumber(value, "InteractIndex")
                _WhatDistance = Math_Vector2Magnitude(Math.abs(Player_Sprite_MoveController.x - value.x), Math.abs(Player_Sprite_MoveController.y - (value.y - Setting_Game_3248VerticalOffset)))
            }
        }
        if (_WhatDistance > Setting_Interact_MaxDistance) {
            return 0
        } else {
            return _WhoisClosest
        }
    } else {
        return 0
    }
}
function Play_Player_PickupHealth () {
    music.play(music.createSoundEffect(
    WaveShape.Sine,
    1,
    5000,
    255,
    0,
    200,
    SoundExpressionEffect.None,
    InterpolationCurve.Logarithmic
    ), music.PlaybackMode.UntilDone)
}
function Interact_PlayerChange () {
    tiles.placeOnRandomTile(Menu_PlayerChange, assets.tile`transparency16`)
    tiles.setWallAt(tiles.getTileLocation(Level_Sprite_PlayerChange.tilemapLocation().column, Level_Sprite_PlayerChange.tilemapLocation().row + 1), false)
    if (Player_isMale) {
        Player_isMale = !(Player_isMale)
        animation.runImageAnimation(
        Level_Sprite_PlayerChange,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        400,
        true
        )
        blockSettings.writeNumber("PlayerBody", 1)
    } else {
        Player_isMale = !(Player_isMale)
        animation.runImageAnimation(
        Level_Sprite_PlayerChange,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        400,
        true
        )
        blockSettings.writeNumber("PlayerBody", 0)
    }
    tiles.setWallAt(tiles.getTileLocation(Level_Sprite_PlayerChange.tilemapLocation().column, Level_Sprite_PlayerChange.tilemapLocation().row + 1), true)
    Player_CurrentDirection = 5
}
function Interact_ChangeControlsMenu () {
    Player_isLocked = true
    Play_Menu_Open()
    Menu_Sprite_Selector = sprites.create(assets.image`Menu_Selector`, SpriteKind.Player)
    Menu_Sprite_Selector.setFlag(SpriteFlag.RelativeToCamera, true)
    Menu_Sprite_Selector.z = Setting_UI_InterfaceZ + 120
    Menu_Sprite_Selector.setPosition(14, 30)
    Menu_Sprite_PlayerControlsMenu = sprites.create(assets.image`Menu_SetControlsBackground_0`, SpriteKind.Player)
    Menu_Sprite_PlayerControlsMenu.setFlag(SpriteFlag.RelativeToCamera, true)
    Menu_Sprite_PlayerControlsMenu.z = Setting_UI_InterfaceZ + 90
    Menu_Sprite_PlayerControlsScheme = sprites.create(assets.image`Menu_ControlsScheme_1`, SpriteKind.Player)
    Menu_Sprite_PlayerControlsScheme.setFlag(SpriteFlag.RelativeToCamera, true)
    Menu_Sprite_PlayerControlsScheme.z = Setting_UI_InterfaceZ + 100
    Menu_Sprite_PlayerControlsScheme.x += 8
    Menu_ChangeControls = miniMenu.createMenu(
    miniMenu.createMenuItem("x/z"),
    miniMenu.createMenuItem("z/x"),
    miniMenu.createMenuItem("Space"),
    miniMenu.createMenuItem("J/k"),
    miniMenu.createMenuItem("K/J")
    )
    Menu_ChangeControls.setButtonEventsEnabled(true)
    Menu_ChangeControls.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.IconOnly, 0)
    Menu_ChangeControls.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Background, 0)
    Menu_ChangeControls.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.BorderColor, 0)
    Menu_ChangeControls.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Padding, 0)
    Menu_ChangeControls.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Padding, 3)
    Menu_ChangeControls.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
    Menu_ChangeControls.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 5)
    Menu_ChangeControls.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 9)
    Menu_ChangeControls.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 8)
    Menu_ChangeControls.setFlag(SpriteFlag.RelativeToCamera, true)
    Menu_ChangeControls.setPosition(36, 58)
    Menu_ChangeControls.z = Setting_UI_InterfaceZ + 110
    Interact_ControlControlsMenu()
}
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(sprites.readDataNumber(sprite, "moneyPoints"))
    sprites.destroy(sprite)
    Play_Player_PickupMoney()
})
function Game_Brightness25 () {
    color.setColor(1, color.rgb(33, 49, 94))
    color.setColor(2, color.rgb(0, 0, 0))
    color.setColor(3, color.rgb(126, 37, 83))
    color.setColor(4, color.rgb(126, 37, 83))
    color.setColor(5, color.rgb(126, 37, 83))
    color.setColor(6, color.rgb(0, 0, 0))
    color.setColor(7, color.rgb(33, 49, 94))
    color.setColor(8, color.rgb(0, 0, 0))
    color.setColor(9, color.rgb(33, 49, 94))
    color.setColor(10, color.rgb(0, 0, 0))
    color.setColor(11, color.rgb(33, 49, 94))
    color.setColor(12, color.rgb(0, 0, 0))
    color.setColor(13, color.rgb(126, 37, 83))
    color.setColor(14, color.rgb(0, 0, 0))
    color.setColor(15, color.rgb(0, 0, 0))
}
function Game_LoadSave () {
    if (blockSettings.exists("PlayerBody")) {
        if (blockSettings.readNumber("PlayerBody") == 0) {
            Player_isMale = true
        } else {
            Player_isMale = false
        }
    } else {
        Player_isMale = false
        blockSettings.writeNumber("PlayerBody", 1)
    }
}
function Interact_TeleportToGame () {
    Player_isLocked = true
    Game_isTeleporting = true
    Player_CameraOffsetX = 1
    Player_CameraOffsetY = 1
    Player_Sprite_MoveController.setVelocity(0, 0)
    Player_Sprite_MoveController.setPosition(Level_Sprite_Teleporter.x, Level_Sprite_Teleporter.y)
    extraEffects.createSpreadEffectAt(Effect_Level_PlayerTeleport, Level_Sprite_Teleporter.x, Level_Sprite_Teleporter.y + 0, 5000, 16, 151)
    extraEffects.createSpreadEffectAt(Effect_Level_PlayerTeleportFront, Level_Sprite_Teleporter.x, Level_Sprite_Teleporter.y + 0, 5000, 16, 151)
    extraEffects.createSpreadEffectAt(Effect_Level_TeleportExplosion, Level_Sprite_Teleporter.x, Level_Sprite_Teleporter.y + 0, 200, 16, 151)
    Play_Teleport()
    timer.after(1000, function () {
        Game_FadeToBlack(500)
        timer.after(600, function () {
            Level_Unload()
            Level_Load(1)
            Player_InitializePlayer()
            Game_FadeFromBlack(500)
            Player_CurrentDirection = 5
            Game_isTeleporting = false
            timer.after(500, function () {
                Game_StartGame()
            })
        })
    })
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Helmet, function (sprite, otherSprite) {
    if (!(Player_hasHelmet)) {
        sprites.destroy(otherSprite)
        Player_hasHelmet = true
        Play_Player_PickupHelmet()
    }
})
function Interact_PlayerChangeMenu () {
    Player_isLocked = true
    Play_Menu_Open()
    Menu_Sprite_Selector = sprites.create(assets.image`Menu_Selector`, SpriteKind.Player)
    Menu_Sprite_Selector.setFlag(SpriteFlag.RelativeToCamera, true)
    Menu_Sprite_Selector.z = Setting_UI_InterfaceZ + 120
    Menu_Sprite_Selector.setPosition(47, 106)
    Menu_PlayerChangeBackground = sprites.create(assets.image`Menu_PlayerChangeBackground`, SpriteKind.Player)
    animation.runImageAnimation(
    Menu_PlayerChangeBackground,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    1000,
    true
    )
    Menu_PlayerChangeBackground.setFlag(SpriteFlag.RelativeToCamera, true)
    Menu_PlayerChangeBackground.z = Setting_UI_InterfaceZ + 100
    Menu_PlayerChange = miniMenu.createMenu(
    miniMenu.createMenuItem("Yes"),
    miniMenu.createMenuItem("No")
    )
    Menu_PlayerChange.setButtonEventsEnabled(true)
    Menu_PlayerChange.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Background, 0)
    Menu_PlayerChange.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.BorderColor, 0)
    Menu_PlayerChange.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Padding, 0)
    Menu_PlayerChange.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Padding, 8)
    Menu_PlayerChange.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 2)
    Menu_PlayerChange.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 1)
    Menu_PlayerChange.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 9)
    Menu_PlayerChange.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 8)
    Menu_PlayerChange.setFlag(SpriteFlag.RelativeToCamera, true)
    Menu_PlayerChange.setPosition(80, 106)
    Menu_PlayerChange.z = Setting_UI_InterfaceZ + 110
    Interact_ControlPlayerChangeMenu()
}
sprites.onOverlap(SpriteKind.Food, SpriteKind.PickupBox, function (sprite, otherSprite) {
    sprite.follow(Player_Sprite_MoveController, 15 + 1000 / Sprites_DistanceBetweenSprites(sprite, otherSprite))
})
function Interact_ControlPlayerChangeMenu () {
    Menu_PlayerChange.onButtonPressed(controller.A, function (selection, selectedIndex) {
        Menu_PlayerChange.close()
        sprites.destroy(Menu_PlayerChangeBackground)
        sprites.destroy(Menu_Sprite_Selector)
        if (selectedIndex == 0) {
            Interact_PlayerChange()
            Play_Menu_Select()
        } else {
            Play_Menu_Close()
        }
        pause(100)
        Player_isLocked = false
    })
    Menu_PlayerChange.onButtonPressed(controller.B, function (selection, selectedIndex) {
        if (selectedIndex == 1) {
            Menu_PlayerChange.close()
            sprites.destroy(Menu_PlayerChangeBackground)
            sprites.destroy(Menu_Sprite_Selector)
            Play_Menu_Close()
            pause(100)
            Player_isLocked = false
        } else {
            Menu_PlayerChange.moveSelection(miniMenu.MoveDirection.Right)
            Menu_Sprite_Selector.setPosition(82, 106)
            Play_Menu_Change()
        }
    })
    Menu_PlayerChange.onButtonPressed(controller.left, function (selection, selectedIndex) {
        if (selectedIndex == 1) {
            Menu_PlayerChange.moveSelection(miniMenu.MoveDirection.Left)
            Menu_Sprite_Selector.setPosition(47, 106)
            Play_Menu_Change()
        }
    })
    Menu_PlayerChange.onButtonPressed(controller.right, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            Menu_PlayerChange.moveSelection(miniMenu.MoveDirection.Right)
            Menu_Sprite_Selector.setPosition(82, 106)
            Play_Menu_Change()
        }
    })
}
function Play_Weapon_Burst () {
    music.play(music.createSoundEffect(
    WaveShape.Triangle,
    randint(4500, 5000),
    1,
    255,
    0,
    100,
    SoundExpressionEffect.None,
    InterpolationCurve.Curve
    ), music.PlaybackMode.InBackground)
}
function Player_PlayerImage_Right () {
    if (Player_hasHelmet) {
        Player_Sprite_VisualsHelmet.setImage(assets.image`Player_Helmet_2`)
    } else {
        Player_Sprite_VisualsHelmet.setImage(assets.image`Player_Helmet_0`)
    }
    if (Player_isMale) {
        if (Player_CurrentDirection == 1) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player_0_1`)
        } else if (Player_CurrentDirection == 2) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player_1_1`)
        } else if (Player_CurrentDirection == 3) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player_2_1`)
        } else if (Player_CurrentDirection == 4) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player_3_1`)
        } else if (Player_CurrentDirection == 5 || Player_CurrentDirection == 0) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player_4_1`)
        } else if (Player_CurrentDirection == 6) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player_5_1`)
        } else if (Player_CurrentDirection == 7) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player_6_1`)
        } else if (Player_CurrentDirection == 8) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player_7_1`)
        }
    } else {
        if (Player_CurrentDirection == 1) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player2_0_1`)
        } else if (Player_CurrentDirection == 2) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player2_1_1`)
        } else if (Player_CurrentDirection == 3) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player2_2_1`)
        } else if (Player_CurrentDirection == 4) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player2_3_1`)
        } else if (Player_CurrentDirection == 5 || Player_CurrentDirection == 0) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player2_4_1`)
        } else if (Player_CurrentDirection == 6) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player2_5_1`)
        } else if (Player_CurrentDirection == 7) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player2_6_1`)
        } else if (Player_CurrentDirection == 8) {
            Player_Sprite_VisualsPlayer.setImage(assets.image`Player2_7_1`)
        }
    }
}
function Play_Player_Walk3 () {
	
}
function Sprite_PlaceOnOffset (_Sprite: Sprite, _Target: Sprite, _OffsetX: number, _OffsetY: number) {
    _Sprite.setPosition(_Target.x + _OffsetX, _Target.y + _OffsetY)
}
function dy_Stabilized () {
    if (Player_isLocked) {
        return 0
    } else {
        return Math.trunc(controller.dy(50))
    }
}
function Level_Walls () {
    for (let value of tiles.getTilesByType(assets.tile`transparency16`)) {
        Level_Wall = sprites.create(assets.image`Bush`, SpriteKind.Level)
        tiles.placeOnTile(Level_Wall, value)
        Level_Wall.z = value.y + 8
        tiles.setWallAt(value, true)
    }
}
function Play_Menu_Close () {
    music.play(music.createSoundEffect(
    WaveShape.Sine,
    864,
    1,
    Setting_Sound_EffectsVolume / 1,
    0,
    100,
    SoundExpressionEffect.None,
    InterpolationCurve.Logarithmic
    ), music.PlaybackMode.InBackground)
}
function Settings_BurstRifle () {
    Setting_Weapon_Clipsize_Burst = 6
    Setting_Weapon_ReloadWait_Burst = 200
    Setting_Weapon_ReloadSpeed_Burst = 100
    Setting_Weapon_Damage_Burst = 26
    Setting_Weapon_BulletVelocity_Burst = 200
    Setting_Weapon_Firerate_Burst = 10
    Setting_Weapon_Inaccuracy_Burst = 30
}
function Enemy_CreateSlime (_row: number, _col: number) {
    Enemy_Slime = sprites.create(assets.image`Slime_0`, SpriteKind.Slime)
    Enemy_Slime.setPosition(_row, _col)
    Enemy_Slime.y += Setting_Game_3248VerticalOffset
    sprites.setDataNumber(Enemy_Slime, "lastJump", game.runtime() - Setting_Enemy_SlimeJumpDelay)
    sprites.setDataNumber(Enemy_Slime, "vertical", Math.max(0, -0.00019 * (game.runtime() - sprites.readDataNumber(Enemy_Slime, "lastJump") - 1950) ** 2 + 30))
    sprites.setDataNumber(Enemy_Slime, "CurrentHealth", Setting_Enemy_SlimeHealth)
    sprites.setDataNumber(Enemy_Slime, "MoveX", 0)
    sprites.setDataNumber(Enemy_Slime, "MoveY", 0)
    Enemy_Slime.setFlag(SpriteFlag.Ghost, true)
}
function Game_CreateVariables () {
    Game_isPlaying = false
    Game_isTeleporting = false
    Control_LastPressedDirectionButton = 0
    Control_LastPressedButtonA = -1000
    Control_LastPressedButtonB = -1000
    Control_isControllerLocked = false
}
function Enemy_UpdateSlimesCollision () {
    for (let value of sprites.allOfKind(SpriteKind.Slime)) {
        if (Player_Sprite_MoveController.x < value.x + Setting_Enemy_SlimeHitboxScale && Player_Sprite_MoveController.x > value.x - Setting_Enemy_SlimeHitboxScale) {
            if (Player_Sprite_MoveController.y < value.y + Setting_Enemy_SlimeHitboxScale - Setting_Game_3248VerticalOffset && Player_Sprite_MoveController.y > value.y - Setting_Enemy_SlimeHitboxScale - Setting_Game_3248VerticalOffset) {
                if (sprites.readDataNumber(Player_Sprite_MoveController, "vertical") < sprites.readDataNumber(value, "vertical") + Setting_Enemy_SlimeHitboxScale) {
                    if (game.runtime() > Player_LastAttacked + Setting_Player_InvinvibilityFramesLength) {
                        KnockbackSpriteFromCoordinates(1000, Player_Sprite_MoveController, value.x, value.y - Setting_Game_3248VerticalOffset)
                        Player_LastAttacked = game.runtime()
                        DamagePlayer(20)
                    } else {
                        KnockbackSpriteFromCoordinates(Math.max(5, 200 / (1 + Math_Vector2Magnitude(Player_Sprite_MoveController.x - value.x, Player_Sprite_MoveController.y - (value.y - Setting_Game_3248VerticalOffset)))), Player_Sprite_MoveController, value.x, value.y - Setting_Game_3248VerticalOffset)
                    }
                }
            }
        }
        for (let value2 of sprites.allOfKind(SpriteKind.Slime)) {
            if (value != value2) {
                if (value2.x < value.x + Setting_Enemy_SlimeHitboxScale && value2.x > value.x - Setting_Enemy_SlimeHitboxScale) {
                    if (value2.y - Setting_Game_3248VerticalOffset < value.y + Setting_Enemy_SlimeHitboxScale - Setting_Game_3248VerticalOffset && value2.y - Setting_Game_3248VerticalOffset > value.y - Setting_Enemy_SlimeHitboxScale - Setting_Game_3248VerticalOffset) {
                        if (sprites.readDataNumber(value2, "vertical") < sprites.readDataNumber(value, "vertical") + Setting_Enemy_SlimeHitboxScale) {
                            _3248EnemyCollison(value, value2, 2)
                        }
                    }
                }
            }
        }
    }
}
function Level_Pickups () {
    for (let value of tiles.getTilesByType(assets.tile`transparency16`)) {
        Level_Pickup = sprites.create(assets.image`Player_Helmet_3`, SpriteKind.Helmet)
        tiles.placeOnTile(Level_Pickup, value)
        Level_Pickup.z = value.y + 8
        tiles.setWallAt(value, false)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
sprites.onOverlap(SpriteKind.Potion, SpriteKind.Player, function (sprite, otherSprite) {
    UI_Sprite_HealthBar.value += sprites.readDataNumber(sprite, "moneyPoints")
    sprites.destroy(sprite)
    Play_Player_PickupHealth()
})
function UI_CreateButtons () {
    UI_Sprite_ButtonFrame = sprites.create(assets.image`UI_ButtonsFrame`, SpriteKind.UserInterface)
    UI_Sprite_ButtonFrame.setFlag(SpriteFlag.Ghost, true)
    UI_Sprite_ButtonFrame.setFlag(SpriteFlag.RelativeToCamera, true)
    UI_Sprite_ButtonFrame.setPosition(143, 107)
    UI_Sprite_ButtonFrame.z = Setting_UI_InterfaceZ
    UI_Sprite_ButtonA = sprites.create(assets.image`UI_ButtonsFrame0`, SpriteKind.UserInterface)
    UI_Sprite_ButtonA.setFlag(SpriteFlag.Ghost, true)
    UI_Sprite_ButtonA.setFlag(SpriteFlag.RelativeToCamera, true)
    UI_Sprite_ButtonA.setPosition(143, 107)
    UI_Sprite_ButtonA.z = Setting_UI_InterfaceZ + 10
    UI_Sprite_ButtonB = sprites.create(assets.image`UI_ButtonsFrame1`, SpriteKind.UserInterface)
    UI_Sprite_ButtonB.setFlag(SpriteFlag.Ghost, true)
    UI_Sprite_ButtonB.setFlag(SpriteFlag.RelativeToCamera, true)
    UI_Sprite_ButtonB.setPosition(143, 107)
    UI_Sprite_ButtonB.z = Setting_UI_InterfaceZ + 10
}
function Weapon_UpdateProjectileZ () {
    for (let value of sprites.allOfKind(SpriteKind.Projectile)) {
        value.z = value.y + sprites.readDataNumber(value, "vertical")
    }
}
function Play_Game_Start2 () {
    music.play(music.createSoundEffect(
    WaveShape.Sine,
    98,
    98,
    255,
    0,
    1000,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.InBackground)
    music.play(music.createSoundEffect(
    WaveShape.Sine,
    146.8,
    146.8,
    255,
    0,
    1000,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.InBackground)
    music.play(music.createSoundEffect(
    WaveShape.Triangle,
    392,
    392,
    255,
    0,
    1000,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.InBackground)
    music.play(music.createSoundEffect(
    WaveShape.Triangle,
    587,
    587,
    255,
    0,
    1000,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.InBackground)
    music.play(music.createSoundEffect(
    WaveShape.Sawtooth,
    783,
    783,
    255,
    0,
    1000,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.InBackground)
}
function SpawnSlime () {
    if (Math.percentChance(60)) {
        if (Math.percentChance(50)) {
            Enemy_CreateSlime(Player_Sprite_VisualsPlayer.x + randint(-1 * Setting_Enemy_SpawnHorizontalOffset, Setting_Enemy_SpawnHorizontalOffset), Player_Sprite_VisualsPlayer.y + Setting_Enemy_SpawnVerticalOffset)
        } else {
            Enemy_CreateSlime(Player_Sprite_VisualsPlayer.x + randint(-1 * Setting_Enemy_SpawnHorizontalOffset, Setting_Enemy_SpawnHorizontalOffset), Player_Sprite_VisualsPlayer.y + -1 * Setting_Enemy_SpawnVerticalOffset)
        }
    } else {
        if (true) {
            Enemy_CreateSlime(Player_Sprite_VisualsPlayer.x + -1 * Setting_Enemy_SpawnHorizontalOffset, Player_Sprite_VisualsPlayer.y + randint(-1 * Setting_Enemy_SpawnVerticalOffset, Setting_Enemy_SpawnVerticalOffset))
        } else {
            Enemy_CreateSlime(Player_Sprite_VisualsPlayer.x + Setting_Enemy_SpawnHorizontalOffset, Player_Sprite_VisualsPlayer.y + randint(-1 * Setting_Enemy_SpawnVerticalOffset, Setting_Enemy_SpawnVerticalOffset))
        }
    }
}
function Level_PlayerChange () {
    for (let value of tiles.getTilesByType(assets.tile`transparency16`)) {
        Level_Sprite_PlayerChange = sprites.create(assets.image`Player2_5_0`, SpriteKind.Interact)
        if (Player_isMale) {
            animation.runImageAnimation(
            Level_Sprite_PlayerChange,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            400,
            true
            )
        } else {
            animation.runImageAnimation(
            Level_Sprite_PlayerChange,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            400,
            true
            )
        }
        tiles.setWallAt(tiles.getTileLocation(value.column, value.row), true)
        tiles.placeOnTile(Level_Sprite_PlayerChange, tiles.getTileLocation(value.column, value.row))
        Level_Sprite_PlayerChange.y += Setting_Game_3248VerticalOffset
        Level_Sprite_PlayerChange.z = value.y
        sprites.setDataNumber(Level_Sprite_PlayerChange, "InteractIndex", 1)
    }
}
function Player_CurrentSpeed () {
    return Math_Vector2Magnitude(Player_Sprite_MoveController.vx, Player_Sprite_MoveController.vy) / Setting_Player_WalkSpeed
}
function dy_Normalized () {
    return NormalizeY(dx_Stabilized(), dy_Stabilized())
}
function Player_ZeroMovement () {
    if (dx_Stabilized() == 0) {
        if (Math.abs(Player_Sprite_MoveController.vx) < 5) {
            Player_Sprite_MoveController.vx = 0
        }
    }
    if (dy_Stabilized() == 0) {
        if (Math.abs(Player_Sprite_MoveController.vy) < 5) {
            Player_Sprite_MoveController.vy = 0
        }
    }
}
function UI_ShakeButtonA () {
    UI_LastButtonAShake = game.runtime()
    UI_isButtonAShaking = true
    if (Player_CurrentInteractState == 0) {
        animation.runImageAnimation(
        UI_Sprite_ButtonIconA,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        Setting_UI_ButtonIconShakeDuration / 6,
        false
        )
    } else if (Player_CurrentInteractState == 1) {
        animation.runImageAnimation(
        UI_Sprite_ButtonIconA,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        Setting_UI_ButtonIconShakeDuration / 6,
        false
        )
    } else if (Player_CurrentInteractState == 2) {
        animation.runImageAnimation(
        UI_Sprite_ButtonIconA,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        Setting_UI_ButtonIconShakeDuration / 6,
        false
        )
    }
}
function UI_CreateButtonIcons () {
    UI_Sprite_ButtonIconA = sprites.create(assets.image`UI_Icon_0_1`, SpriteKind.UserInterface)
    UI_Sprite_ButtonIconA.setFlag(SpriteFlag.Ghost, true)
    UI_Sprite_ButtonIconA.setFlag(SpriteFlag.RelativeToCamera, true)
    UI_Sprite_ButtonIconA.setPosition(144, 96)
    UI_Sprite_ButtonIconA.z = Setting_UI_InterfaceZ + 20
    UI_Sprite_ButtonIconB = sprites.create(assets.image`UI_Icon_2_1`, SpriteKind.UserInterface)
    UI_Sprite_ButtonIconB.setFlag(SpriteFlag.Ghost, true)
    UI_Sprite_ButtonIconB.setFlag(SpriteFlag.RelativeToCamera, true)
    UI_Sprite_ButtonIconB.setPosition(127, 104)
    UI_Sprite_ButtonIconB.z = Setting_UI_InterfaceZ + 20
}
function Interact_UpdateInteractState () {
    Interact_PlaceIcon()
    if (Interact_WhoIsClosest() != 0) {
        Player_CurrentInteractState = 1
    } else if (false) {
        Player_CurrentInteractState = 2
    } else {
        Player_CurrentInteractState = 0
    }
}
function Play_DamageSlime () {
    music.play(music.createSoundEffect(
    WaveShape.Sine,
    1,
    randint(500, 600),
    255,
    0,
    100,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.InBackground)
}
function Player_PlayerVisuals () {
    Player_PlaceOnOffset()
    if (Player_CurrentState == 1) {
        Player_PlayerImage_Walk()
    } else if (Player_CurrentState == 2 || Game_isTeleporting) {
        Player_PlayerImage_Jump()
    } else {
        Player_PlayerImage_Idle()
    }
    Player_PlayerZ()
}
function Game_SetControls (_ControlIndex: number) {
    Game_CurrentControlScheme = _ControlIndex
    blockSettings.writeNumber("ControlScheme", _ControlIndex)
    if (_ControlIndex == 1) {
        Keybinds.setSimulatorKeymap(
        Keybinds.PlayerNumber.ONE,
        Keybinds.CustomKey.UP,
        Keybinds.CustomKey.DOWN,
        Keybinds.CustomKey.LEFT,
        Keybinds.CustomKey.RIGHT,
        Keybinds.CustomKey.X,
        Keybinds.CustomKey.Z
        )
    } else if (_ControlIndex == 2) {
        Keybinds.setSimulatorKeymap(
        Keybinds.PlayerNumber.ONE,
        Keybinds.CustomKey.W,
        Keybinds.CustomKey.S,
        Keybinds.CustomKey.A,
        Keybinds.CustomKey.D,
        Keybinds.CustomKey.ENTER,
        Keybinds.CustomKey.SPACE
        )
    } else if (_ControlIndex == 3) {
        Keybinds.setSimulatorKeymap(
        Keybinds.PlayerNumber.ONE,
        Keybinds.CustomKey.W,
        Keybinds.CustomKey.S,
        Keybinds.CustomKey.A,
        Keybinds.CustomKey.D,
        Keybinds.CustomKey.K,
        Keybinds.CustomKey.J
        )
    } else if (_ControlIndex == 4) {
        Keybinds.setSimulatorKeymap(
        Keybinds.PlayerNumber.ONE,
        Keybinds.CustomKey.W,
        Keybinds.CustomKey.S,
        Keybinds.CustomKey.A,
        Keybinds.CustomKey.D,
        Keybinds.CustomKey.J,
        Keybinds.CustomKey.K
        )
    } else {
        Keybinds.setMakeyMakeyDefaults()
        Game_CurrentControlScheme = 0
        blockSettings.writeNumber("ControlScheme", 0)
    }
}
function Player_UpdateStoppingCheck () {
    if (Math_Vector2Magnitude(Player_Sprite_MoveController.vx, Player_Sprite_MoveController.vy) < Player_LastVelocity - Setting_Player_StoppingThreshold) {
        Player_isStopping = true
    } else {
        Player_isStopping = false
    }
    Player_LastVelocity = Math_Vector2Magnitude(Player_Sprite_MoveController.vx, Player_Sprite_MoveController.vy)
}
function Sprites_DistanceBetweenSprites (_Sprite1: Sprite, _Sprite2: Sprite) {
    return Math_Vector2Magnitude(Math.abs(_Sprite1.x - _Sprite2.x), Math.abs(_Sprite1.y - _Sprite2.y))
}
function Math_GetDirection8 (_x: number, _y: number, _Minimum: number) {
    if (Math_Vector2Magnitude(_x, _y) <= _Minimum) {
        return 0
    } else {
        _radians = Math.atan2(_x, _y)
        if (_radians < -2.7488936 || _radians >= 2.7488936) {
            return 1
        } else if (_radians < 2.7488936 && _radians >= 1.9634954) {
            return 2
        } else if (_radians < 1.9634954 && _radians >= 1.178097) {
            return 3
        } else if (_radians < 1.178097 && _radians >= 0.3926991) {
            return 4
        } else if (_radians < 0.3926991 && _radians >= -0.3926991) {
            return 5
        } else if (_radians < -0.3926991 && _radians >= -1.178097) {
            return 6
        } else if (_radians < -1.178097 && _radians >= -1.9634954) {
            return 7
        } else {
            return 8
        }
    }
}
function Enemy_DamageSlime (_Enemy: Sprite, _Damage: number) {
    _Enemy.setFlag(SpriteFlag.Invisible, true)
    sprites.changeDataNumberBy(_Enemy, "CurrentHealth", -1 * _Damage)
    Effect_Enemy_SlimeDamaged.z = _Enemy.z
    extraEffects.createSpreadEffectAt(Effect_Enemy_SlimeDamaged, _Enemy.x, _Enemy.y + 15 - sprites.readDataNumber(_Enemy, "vertical"), 100, 16, _Damage / 2)
    Play_DamageSlime()
    animation.runMovementAnimation(
    _Enemy,
    animation.animationPresets(animation.shake),
    50,
    false
    )
    if (sprites.readDataNumber(_Enemy, "CurrentHealth") <= 0) {
        Pickup_CreatePickup(_Enemy.x, _Enemy.y + 15)
        sprites.destroy(_Enemy)
        Effect_Enemy_SlimeDeath.z = _Enemy.z
        extraEffects.createSpreadEffectAt(Effect_Enemy_SlimeDeath, _Enemy.x, _Enemy.y + 15 - sprites.readDataNumber(_Enemy, "vertical"), 100, 16, 20)
        Play_KillSlime()
        Game_EnemiesDefeated += 1
    } else {
        _Enemy.setFlag(SpriteFlag.Invisible, false)
    }
}
function Enemy_UpdateEnemyMovement () {
    Enemy_UpdateSlimesMovement()
}
function UpdateCamera () {
    if (!(Player_isCameraFrozen) && (dx_Stabilized() != 0 || dy_Stabilized() != 0)) {
        Control_LastPressedDirectionButton = game.runtime()
        if (dx_Stabilized() != 0) {
            Player_CameraOffsetX += dx_Normalized() * Math.abs(Math.constrain(Player_Sprite_MoveController.vx / Setting_Player_WalkSpeed, Math.min(dx_Normalized(), 0), Math.max(0, dx_Normalized()))) * Setting_Player_MovingCameraSpeed
        } else {
            Player_CameraOffsetX += Math.constrain(Player_CameraOffsetX, 1, -1) * Setting_Player_MovingCameraSpeed / 4
        }
        if (dy_Stabilized() != 0) {
            Player_CameraOffsetY += dy_Normalized() * Math.abs(Math.constrain(Player_Sprite_MoveController.vy / Setting_Player_WalkSpeed, Math.min(dy_Normalized(), 0), Math.max(0, dy_Normalized()))) * Setting_Player_MovingCameraSpeed
        } else {
            Player_CameraOffsetY += Math.constrain(Player_CameraOffsetY, 1, -1) * Setting_Player_MovingCameraSpeed / 4
        }
    }
    if (Player_CurrentState == 0 && game.runtime() > Control_LastPressedDirectionButton + Setting_Player_CameraResetDelay && game.runtime() > Control_LastPressedButtonA + Setting_Player_CameraResetDelay && game.runtime() > Control_LastPressedButtonB + Setting_Player_CameraResetDelay) {
        Player_CameraOffsetX += Math.constrain(Player_CameraOffsetX, 1, -1) * Setting_Player_MovingCameraSpeed / 6
        Player_CameraOffsetY += Math.constrain(Player_CameraOffsetY, 1, -1) * Setting_Player_MovingCameraSpeed / 6
    }
    Player_CameraOffsetX = Math.constrain(Player_CameraOffsetX, Setting_Player_MovingCameraOffset * -1, Setting_Player_MovingCameraOffset)
    Player_CameraOffsetY = Math.constrain(Player_CameraOffsetY, Setting_Player_MovingCameraOffset * -1, Setting_Player_MovingCameraOffset)
    scene.centerCameraAt(Player_Sprite_VisualsPlayer.x + Math.round(Player_CameraOffsetX), Player_Sprite_VisualsPlayer.y + 6 + Math.round(Player_CameraOffsetY))
}
function Play_Weapon_BurstReload () {
    music.play(music.createSoundEffect(WaveShape.Noise, 1, 5000, 32, 0, 20, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
}
function Enemy_UpdateEnemyDespawns () {
    Enemy_UpdateSlimesDespawns()
}
function Play_Player_Walk2 () {
    music.play(music.createSoundEffect(
    WaveShape.Sine,
    419,
    100,
    Setting_Sound_EffectsVolume * Setting_Sound_SmallEffectsMultiplier,
    0,
    50,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.InBackground)
}
function Interact_ControlControlsMenu () {
    if (Game_CurrentControlScheme == 1) {
        Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Down)
        Menu_Sprite_PlayerControlsScheme.setImage(assets.image`Menu_ControlsScheme_4`)
        Menu_Sprite_Selector.y += 14
    } else if (Game_CurrentControlScheme == 2) {
        Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Down)
        Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Down)
        Menu_Sprite_PlayerControlsScheme.setImage(assets.image`Menu_ControlsScheme_1`)
        Menu_Sprite_Selector.y += 28
    } else if (Game_CurrentControlScheme == 3) {
        Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Down)
        Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Down)
        Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Down)
        Menu_Sprite_PlayerControlsScheme.setImage(assets.image`Menu_ControlsScheme_2`)
        Menu_Sprite_Selector.y += 42
    } else if (Game_CurrentControlScheme == 4) {
        Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Down)
        Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Down)
        Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Down)
        Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Down)
        Menu_Sprite_PlayerControlsScheme.setImage(assets.image`Menu_ControlsScheme_3`)
        Menu_Sprite_Selector.y += 56
    } else {
        Menu_Sprite_PlayerControlsScheme.setImage(assets.image`Menu_ControlsScheme_5`)
    }
    Menu_ChangeControls.onButtonPressed(controller.A, function (selection, selectedIndex) {
        Menu_ChangeControls.close()
        sprites.destroy(Menu_Sprite_PlayerControlsMenu)
        sprites.destroy(Menu_Sprite_PlayerControlsScheme)
        sprites.destroy(Menu_Sprite_Selector)
        Play_Menu_Select()
        if (selectedIndex == Game_CurrentControlScheme) {
            Play_Menu_Close()
        } else {
            Game_SetControls(selectedIndex)
        }
        pause(100)
        Player_isLocked = false
    })
    Menu_ChangeControls.onButtonPressed(controller.B, function (selection, selectedIndex) {
        if (selectedIndex == Game_CurrentControlScheme) {
            Menu_ChangeControls.close()
            sprites.destroy(Menu_Sprite_PlayerControlsMenu)
            sprites.destroy(Menu_Sprite_PlayerControlsScheme)
            sprites.destroy(Menu_Sprite_Selector)
            Play_Menu_Close()
            pause(100)
            Player_isLocked = false
        } else {
            if (Game_CurrentControlScheme == 1) {
                Menu_Sprite_PlayerControlsScheme.setImage(assets.image`Menu_ControlsScheme_4`)
            } else if (Game_CurrentControlScheme == 2) {
                Menu_Sprite_PlayerControlsScheme.setImage(assets.image`Menu_ControlsScheme_1`)
            } else if (Game_CurrentControlScheme == 3) {
                Menu_Sprite_PlayerControlsScheme.setImage(assets.image`Menu_ControlsScheme_2`)
            } else if (Game_CurrentControlScheme == 4) {
                Menu_Sprite_PlayerControlsScheme.setImage(assets.image`Menu_ControlsScheme_3`)
            } else {
                Menu_Sprite_PlayerControlsScheme.setImage(assets.image`Menu_ControlsScheme_5`)
            }
            if (false) {
            	
            } else if (selectedIndex + 3 == Game_CurrentControlScheme) {
                Menu_Sprite_Selector.y += 42
                Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Down)
                Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Down)
                Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Down)
            } else if (selectedIndex + 2 == Game_CurrentControlScheme) {
                Menu_Sprite_Selector.y += 28
                Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Down)
                Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Down)
            } else if (selectedIndex + 1 == Game_CurrentControlScheme) {
                Menu_Sprite_Selector.y += 14
                Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Down)
            } else if (selectedIndex - 3 == Game_CurrentControlScheme) {
                Menu_Sprite_Selector.y += -42
                Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Up)
                Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Up)
                Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Up)
            } else if (selectedIndex - 2 == Game_CurrentControlScheme) {
                Menu_Sprite_Selector.y += -28
                Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Up)
                Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Up)
            } else if (selectedIndex + 4 == Game_CurrentControlScheme) {
                Menu_Sprite_Selector.y += 56
                Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Down)
                Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Down)
                Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Down)
                Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Down)
            } else if (selectedIndex - 4 == Game_CurrentControlScheme) {
                Menu_Sprite_Selector.y += -56
                Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Up)
                Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Up)
                Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Up)
                Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Up)
            } else {
                Menu_Sprite_Selector.y += -14
                Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Up)
            }
            Play_Menu_Change()
        }
    })
    Menu_ChangeControls.onButtonPressed(controller.up, function (selection, selectedIndex) {
        if (selectedIndex > 0) {
            Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Up)
            Menu_Sprite_Selector.y += -14
            Play_Menu_Change()
            if (selectedIndex == 3) {
                Menu_Sprite_PlayerControlsScheme.setImage(assets.image`Menu_ControlsScheme_1`)
            } else if (selectedIndex == 2) {
                Menu_Sprite_PlayerControlsScheme.setImage(assets.image`Menu_ControlsScheme_4`)
            } else if (selectedIndex == 4) {
                Menu_Sprite_PlayerControlsScheme.setImage(assets.image`Menu_ControlsScheme_2`)
            } else {
                Menu_Sprite_PlayerControlsScheme.setImage(assets.image`Menu_ControlsScheme_5`)
            }
        }
    })
    Menu_ChangeControls.onButtonPressed(controller.down, function (selection, selectedIndex) {
        if (selectedIndex < 4) {
            Menu_ChangeControls.moveSelection(miniMenu.MoveDirection.Down)
            Menu_Sprite_Selector.y += 14
            Play_Menu_Change()
            if (selectedIndex == 2) {
                Menu_Sprite_PlayerControlsScheme.setImage(assets.image`Menu_ControlsScheme_2`)
            } else if (selectedIndex == 1) {
                Menu_Sprite_PlayerControlsScheme.setImage(assets.image`Menu_ControlsScheme_1`)
            } else if (selectedIndex == 3) {
                Menu_Sprite_PlayerControlsScheme.setImage(assets.image`Menu_ControlsScheme_3`)
            } else {
                Menu_Sprite_PlayerControlsScheme.setImage(assets.image`Menu_ControlsScheme_4`)
            }
        }
    })
}
function UI_CreateHealth () {
    UI_Sprite_HealthFrame = sprites.create(assets.image`UI_HealthFrame`, SpriteKind.UserInterface)
    UI_Sprite_HealthFrame.setFlag(SpriteFlag.Ghost, true)
    UI_Sprite_HealthFrame.setFlag(SpriteFlag.RelativeToCamera, true)
    UI_Sprite_HealthFrame.setPosition(34, 10)
    UI_Sprite_HealthFrame.z = Setting_UI_InterfaceZ
    UI_Sprite_ShieldIcon = sprites.create(assets.image`UI_ShieldIcon_0`, SpriteKind.UserInterface)
    UI_Sprite_ShieldIcon.setFlag(SpriteFlag.Ghost, true)
    UI_Sprite_ShieldIcon.setFlag(SpriteFlag.RelativeToCamera, true)
    UI_Sprite_ShieldIcon.setPosition(34, 10)
    UI_Sprite_ShieldIcon.z = Setting_UI_InterfaceZ + 10
    UI_Sprite_HealthBar = statusbars.create(41, 8, StatusBarKind.Health)
    UI_Sprite_HealthBar.setColor(9, 8, 3)
    UI_Sprite_HealthBar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    UI_Sprite_HealthBar.setPosition(26, 8)
    UI_Sprite_HealthBar.z = Setting_UI_InterfaceZ - 10
}
function Player_ShadowVisuals () {
    Sprite_PlaceOnOffset(Player_Sprite_VisualsShadow, Player_Sprite_MoveController, 0, 0)
    Player_ShadowImage()
}
function Play_Player_TakeDamage () {
    music.play(music.createSoundEffect(WaveShape.Noise, 5000, 1, 255, 0, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    music.play(music.createSoundEffect(WaveShape.Noise, 1110, 1, 255, 0, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    scene.cameraShake(6, 200)
}
function Player_PlaceOnOffset () {
    Player_Sprite_VisualsPlayer.setPosition(Player_Sprite_MoveController.x, Player_Sprite_MoveController.y - (104 - Player_Sprite_JumpController.y) * Setting_Player_VisualJumpMultiplier + Setting_Game_3248VerticalOffset)
    Player_Sprite_VisualsHelmet.setPosition(Player_Sprite_VisualsPlayer.x, Player_Sprite_VisualsPlayer.y)
}
function DamagePlayer (_20: number) {
    if (Player_hasHelmet) {
        Player_hasHelmet = false
        Play_Player_BreakHelmet()
    } else {
        UI_Sprite_HealthBar.value += -1 * _20
        if (UI_Sprite_HealthBar.value <= 0) {
            timer.background(function () {
                pause(500)
                game.gameOver(false)
            })
        }
        Play_Player_TakeDamage()
    }
}
sprites.onOverlap(SpriteKind.WeaponPickup, SpriteKind.Player, function (sprite, otherSprite) {
    Player_CurrentWeapon = sprites.readDataNumber(sprite, "moneyPoints")
    Player_CurrentAmmo = 99
    sprites.destroy(sprite)
    Play_Player_PickupWeapon()
})
function Player_PlayerImage_Walk () {
    if (Player_isReadyToWalk()) {
        if (Player_isFootOut) {
            Play_Player_Walk3()
            Player_isFootOut = false
        } else {
            Player_isFootOut = true
            if (Player_isFootRight) {
                Play_Player_Walk1()
            } else {
                Play_Player_Walk2()
            }
            Player_isFootRight = !(Player_isFootRight)
        }
    }
    if (!(Player_isFootOut)) {
        Player_PlayerImage_Idle()
    } else if (Player_isFootRight) {
        Player_PlayerImage_Right()
    } else {
        Player_PlayerImage_Left()
    }
}
function Play_Weapon_BurstEmpty () {
    music.play(music.createSoundEffect(WaveShape.Noise, 3880, 3877, 71, 0, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
}
function Settings_PlayerMovement () {
    Setting_Player_WalkSpeed = 75
    Setting_Player_RunSpeedMultiplier = 1.5
    Setting_Player_MaxVelocity = 150
    Setting_Player_GroundAcceleration = 7
    Setting_Player_AirAccelMultiplier = 0.25
    Setting_Player_JumpVelocity = 200
    Setting_Player_JumpAcceleration = 400
    Setting_Player_FallAcceleration = 700
    Setting_Player_FallThreshold = 0
    Setting_Player_StoppingThreshold = 2
}
function SetUpProjectVariables () {
    Game_CreateEffects()
    Game_CreateVariables()
    Game_LoadSave()
    Settings_Sound()
    Settings_CameraUI()
    Settings_Controller()
    Settings_PlayerInteraction()
    Settings_PlayerMovement()
    Settings_PlayerVisuals()
    Settings_Enemies()
    Settings_Weapons()
}
function Enemy_UpdateEnemyCollision () {
    Enemy_UpdateSlimesCollision()
}
function Settings_Sound () {
    Setting_Sound_MusicVolume = 255
    Setting_Sound_EffectsVolume = 255
    Setting_Sound_SmallEffectsMultiplier = 0.75
}
function Interact_WizardDialog () {
    Player_isLocked = true
    Play_Menu_Open()
    game.showLongText("Sorry, we don't take 'Space Credits' here...", DialogLayout.Bottom)
    Play_Menu_Change()
    game.showLongText("You'll need treasure if you want this fuel!", DialogLayout.Bottom)
    Play_Menu_Change()
    game.showLongText("Go hunt some slimes!   My magic has no effect on them...", DialogLayout.Bottom)
    Play_Menu_Close()
    pause(100)
    Player_isLocked = false
}
function UI_ShakeButtonB () {
    UI_LastButtonBShake = game.runtime()
    UI_isButtonBShaking = true
    animation.runImageAnimation(
    UI_Sprite_ButtonIconB,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    Setting_UI_ButtonIconShakeDuration / 6,
    false
    )
}
function LeaveTitlescreen () {
    SetUpProjectVariables()
    Game_FadeFromBlack(500)
    Level_Load(0)
    Player_InitializePlayer()
}
function Level_Teleporter () {
    for (let value of tiles.getTilesByType(assets.tile`transparency16`)) {
        Level_Sprite_Teleporter = sprites.create(assets.image`Teleporter_0`, SpriteKind.Interact)
        tiles.placeOnTile(Level_Sprite_Teleporter, tiles.getTileLocation(value.column, value.row))
        Level_Sprite_Teleporter.y += 8
        sprites.setDataNumber(Level_Sprite_Teleporter, "InteractIndex", 3)
        Level_Sprite_Teleporter.setFlag(SpriteFlag.Invisible, true)
        Level_Sprite_Teleporter.setFlag(SpriteFlag.Ghost, true)
        Level_Sprite_TeleporterTop = sprites.create(assets.image`Teleporter_0`, SpriteKind.Dummy)
        tiles.placeOnTile(Level_Sprite_TeleporterTop, tiles.getTileLocation(value.column, value.row))
        Level_Sprite_TeleporterTop.setFlag(SpriteFlag.Ghost, true)
        Level_Sprite_TeleporterTop = sprites.create(assets.image`Teleporter_1`, SpriteKind.Dummy)
        tiles.placeOnTile(Level_Sprite_TeleporterTop, tiles.getTileLocation(value.column, value.row))
        Level_Sprite_Teleporter.setFlag(SpriteFlag.Ghost, true)
        Level_Sprite_TeleporterTop.z += 5
        animation.runImageAnimation(
        Level_Sprite_TeleporterTop,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    }
}
function Game_FadeFromBlack2 (_Time: number) {
    timer.background(function () {
        color.setPalette(
        color.Black
        )
        timer.after(_Time / 5, function () {
            Game_Brightness10()
            timer.after(_Time / 5, function () {
                Game_Brightness25()
                timer.after(_Time / 5, function () {
                    Game_Brightness50()
                    timer.after(_Time / 5, function () {
                        Game_Brightness76()
                        timer.after(_Time / 5, function () {
                            Game_Brightness101()
                        })
                    })
                })
            })
        })
    })
}
function Player_CreateVisuals () {
    if (Game_isTeleporting) {
        Player_CameraOffsetY = 1 * Setting_Player_MovingCameraOffset
    } else {
        Player_CameraOffsetY = -1 * Setting_Player_MovingCameraOffset
    }
    Player_CameraOffsetX = 1
    Player_isFootRight = true
    Player_isFootOut = false
    Player_hasHelmet = false
    Player_isLocked = false
    Player_Sprite_VisualsShadow = sprites.create(assets.image`Shadow1_0`, SpriteKind.Dummy)
    Player_Sprite_VisualsShadow.z = 1
    Player_Sprite_VisualsShadow.setFlag(SpriteFlag.Ghost, true)
    Player_Sprite_VisualsPlayer = sprites.create(assets.image`Player_4_0`, SpriteKind.Dummy)
    Player_Sprite_VisualsPlayer.setFlag(SpriteFlag.Ghost, true)
    Player_Sprite_VisualsHelmet = sprites.create(assets.image`Player_Helmet_0`, SpriteKind.Dummy)
    Player_Sprite_VisualsHelmet.setFlag(SpriteFlag.Ghost, true)
    Player_Sprite_VisualsInteract = sprites.create(assets.image`UI_Icon_1_0`, SpriteKind.Dummy)
    Player_Sprite_VisualsInteract.setFlag(SpriteFlag.Ghost, true)
    Player_Sprite_VisualsInteract.setFlag(SpriteFlag.Invisible, true)
}
function Settings_PlayerVisuals () {
    Setting_Player_VisualJumpMultiplier = 0.6
    Setting_Player_AnimationWalkSpeed = 11
    Setting_Game_3248VerticalOffset = -19
}
function Game_Brightness76 () {
    color.setColor(1, color.rgb(194, 195, 199))
    color.setColor(2, color.rgb(255, 0, 77))
    color.setColor(3, color.rgb(255, 119, 168))
    color.setColor(4, color.rgb(233, 118, 83))
    color.setColor(5, color.rgb(255, 160, 87))
    color.setColor(6, color.rgb(0, 135, 114))
    color.setColor(7, color.rgb(0, 228, 54))
    color.setColor(8, color.rgb(33, 49, 94))
    color.setColor(9, color.rgb(0, 135, 114))
    color.setColor(10, color.rgb(126, 37, 83))
    color.setColor(11, color.rgb(131, 118, 156))
    color.setColor(12, color.rgb(33, 49, 94))
    color.setColor(13, color.rgb(255, 160, 87))
    color.setColor(14, color.rgb(95, 87, 79))
    color.setColor(15, color.rgb(0, 0, 0))
}
function Player_isReadyToWalk () {
    if (game.runtime() > Player_LastStep + 1000 / (Setting_Player_AnimationWalkSpeed * Player_CurrentSpeed())) {
        Player_LastStep = game.runtime()
        return true
    } else {
        return false
    }
}
function Player_LimitVelocity () {
    Player_Sprite_MoveController.setVelocity(Math.constrain(Player_Sprite_MoveController.vx, -1 * Setting_Player_MaxVelocity, Setting_Player_MaxVelocity), Math.constrain(Player_Sprite_MoveController.vy, -1 * Setting_Player_MaxVelocity, Setting_Player_MaxVelocity))
}
function Pickup_CreateMoney (_X: number, _Y: number) {
    for (let index = 0; index < randint(1, 5); index++) {
        Pickup_Sprite_Money = sprites.create(assets.image`Money_0`, SpriteKind.Food)
        if (Math.percentChance(30)) {
            Pickup_Sprite_Money.setImage(assets.image`Money_3`)
            sprites.setDataNumber(Pickup_Sprite_Money, "moneyPoints", 20)
        } else if (Math.percentChance(48)) {
            Pickup_Sprite_Money.setImage(assets.image`Money_2`)
            sprites.setDataNumber(Pickup_Sprite_Money, "moneyPoints", 50)
        } else if (Math.percentChance(66)) {
            Pickup_Sprite_Money.setImage(assets.image`Money_1`)
            sprites.setDataNumber(Pickup_Sprite_Money, "moneyPoints", 100)
        } else {
            Pickup_Sprite_Money.setImage(assets.image`Money_0`)
            sprites.setDataNumber(Pickup_Sprite_Money, "moneyPoints", 150)
        }
        Pickup_Sprite_Money.setPosition(randint(_X - 8, 8 + _X), randint(_Y - 8, 8 + _Y))
        Pickup_Sprite_Money.z = Pickup_Sprite_Money.y
        Pickup_Sprite_Money.setFlag(SpriteFlag.GhostThroughWalls, true)
    }
}
function Game_Brightness101 () {
    color.setColor(1, color.rgb(255, 241, 232))
    color.setColor(2, color.rgb(255, 0, 77))
    color.setColor(3, color.rgb(255, 119, 168))
    color.setColor(4, color.rgb(255, 160, 87))
    color.setColor(5, color.rgb(255, 236, 39))
    color.setColor(6, color.rgb(0, 135, 114))
    color.setColor(7, color.rgb(0, 228, 54))
    color.setColor(8, color.rgb(33, 49, 94))
    color.setColor(9, color.rgb(41, 173, 255))
    color.setColor(10, color.rgb(126, 37, 83))
    color.setColor(11, color.rgb(194, 195, 199))
    color.setColor(12, color.rgb(131, 118, 156))
    color.setColor(13, color.rgb(250, 204, 135))
    color.setColor(14, color.rgb(95, 87, 79))
    color.setColor(15, color.rgb(0, 0, 0))
}
function Game_Brightness50 () {
    color.setColor(1, color.rgb(131, 118, 156))
    color.setColor(2, color.rgb(126, 37, 83))
    color.setColor(3, color.rgb(255, 0, 77))
    color.setColor(4, color.rgb(233, 118, 83))
    color.setColor(5, color.rgb(233, 118, 83))
    color.setColor(6, color.rgb(33, 49, 94))
    color.setColor(7, color.rgb(0, 135, 114))
    color.setColor(8, color.rgb(33, 49, 94))
    color.setColor(9, color.rgb(0, 135, 114))
    color.setColor(10, color.rgb(126, 37, 83))
    color.setColor(11, color.rgb(131, 118, 156))
    color.setColor(12, color.rgb(33, 49, 94))
    color.setColor(13, color.rgb(233, 118, 83))
    color.setColor(14, color.rgb(126, 37, 83))
    color.setColor(15, color.rgb(0, 0, 0))
}
function UI_UpdateHealth () {
    if (Player_hasHelmet) {
        UI_Sprite_ShieldIcon.setImage(assets.image`UI_ShieldIcon_1`)
    } else {
        UI_Sprite_ShieldIcon.setImage(assets.image`UI_ShieldIcon_0`)
    }
}
function UI_UpdateButtonIcons () {
    if (UI_isButtonBShaking) {
        if (game.runtime() > UI_LastButtonBShake + Setting_UI_ButtonIconShakeDuration) {
            UI_isButtonBShaking = false
            animation.stopAnimation(animation.AnimationTypes.ImageAnimation, UI_Sprite_ButtonIconB)
        }
    }
    if (!(UI_isButtonBShaking)) {
        UI_Sprite_ButtonIconB.setImage(assets.image`UI_Icon_0_1`)
    }
    if (UI_isButtonAShaking) {
        if (game.runtime() > UI_LastButtonAShake + Setting_UI_ButtonIconShakeDuration) {
            UI_isButtonAShaking = false
            animation.stopAnimation(animation.AnimationTypes.ImageAnimation, UI_Sprite_ButtonIconA)
        }
    }
    if (!(UI_isButtonAShaking)) {
        if (Player_CurrentInteractState == 0) {
            UI_Sprite_ButtonIconA.setImage(assets.image`UI_Icon_2_1`)
        } else if (Player_CurrentInteractState == 1) {
            UI_Sprite_ButtonIconA.setImage(assets.image`UI_Icon_1_1`)
        } else if (Player_CurrentInteractState == 2) {
            UI_Sprite_ButtonIconA.setImage(assets.image`UI_Icon_3_1`)
        }
    }
}
function dx_Normalized () {
    return NormalizeX(dx_Stabilized(), dy_Stabilized())
}
function Player_UpdateU () {
    sprites.setDataNumber(Player_Sprite_MoveController, "vertical", (104 - Player_Sprite_JumpController.y) * Setting_Player_VisualJumpMultiplier)
}
function Math_Vector2Magnitude (_x: number, _y: number) {
    if (_x == 0 && _y == 0) {
        return 0
    } else {
        return Math.sqrt(Math.abs(_x) * Math.abs(_x) + Math.abs(_y) * Math.abs(_y))
    }
}
function Enemy_UpdateSlimesMovement () {
    for (let value of sprites.allOfKind(SpriteKind.Slime)) {
        value.z = value.y - Setting_Game_3248VerticalOffset
        if (game.runtime() > sprites.readDataNumber(value, "lastJump") + Setting_Enemy_SlimeJumpDelay) {
            sprites.setDataNumber(value, "lastJump", game.runtime())
            animation.runImageAnimation(
            value,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            100,
            false
            )
        }
        sprites.setDataNumber(value, "vertical", Math.max(0, -0.00019 * (game.runtime() - sprites.readDataNumber(value, "lastJump") - 1950) ** 2 + 30))
        if (sprites.readDataNumber(value, "vertical") > 0) {
            value.setVelocity(sprites.readDataNumber(value, "MoveX"), sprites.readDataNumber(value, "MoveY"))
        } else {
            value.setVelocity(0, 0)
            sprites.setDataNumber(value, "MoveX", Setting_Enemy_SlimeJumpMoveSpeed * ((Player_Sprite_MoveController.x - value.x) / Math_Vector2Magnitude(Player_Sprite_MoveController.x - value.x, Player_Sprite_MoveController.y - (value.y - Setting_Game_3248VerticalOffset))))
            sprites.setDataNumber(value, "MoveY", Setting_Enemy_SlimeJumpMoveSpeed * ((Player_Sprite_MoveController.y - (value.y - Setting_Game_3248VerticalOffset)) / Math_Vector2Magnitude(Player_Sprite_MoveController.x - value.x, Player_Sprite_MoveController.y - (value.y - Setting_Game_3248VerticalOffset))))
        }
    }
}
function Play_Menu_Open () {
    music.play(music.createSoundEffect(
    WaveShape.Sine,
    1,
    2935,
    Setting_Sound_EffectsVolume / 1,
    0,
    100,
    SoundExpressionEffect.None,
    InterpolationCurve.Logarithmic
    ), music.PlaybackMode.InBackground)
}
function Player_CreateMoveController () {
    Player_TargetSpeed = Setting_Player_WalkSpeed
    Player_CurrentState = 0
    Player_LastVelocity = 0
    Player_LastStep = game.runtime()
    Player_LastAttacked = game.runtime() - 1000
    Player_isInvulnerable = false
    Player_isCameraFrozen = false
    Player_CurrentInteractState = 0
    Player_CurrentWeapon = 0
    Player_Sprite_MoveController = sprites.create(img`
        . . . . . . . . . . 
        . . . . . . . . . . 
        2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 
        . . . . . . . . . . 
        . . . . . . . . . . 
        `, SpriteKind.Player)
    sprites.setDataNumber(Player_Sprite_MoveController, "vertical", 0)
    Player_Sprite_MoveController.z = 100
    Player_Sprite_MoveController.setFlag(SpriteFlag.Invisible, true)
    tiles.placeOnRandomTile(Player_Sprite_MoveController, assets.tile`transparency16`)
    Player_Sprite_PickupBox = sprites.create(assets.image`Player_PickupBox`, SpriteKind.PickupBox)
    Player_Sprite_PickupBox.setFlag(SpriteFlag.GhostThroughWalls, true)
    Player_Sprite_PickupBox.setFlag(SpriteFlag.GhostThroughTiles, true)
    Player_Sprite_PickupBox.setFlag(SpriteFlag.StayInScreen, false)
    Player_Sprite_PickupBox.setFlag(SpriteFlag.Invisible, true)
}
function Interact_ChangeControlsMenu2 () {
    Player_isLocked = true
    Play_Menu_Open()
    Menu_Sprite_Selector = sprites.create(assets.image`Menu_Selector`, SpriteKind.Player)
    Menu_Sprite_Selector.setFlag(SpriteFlag.RelativeToCamera, true)
    Menu_Sprite_Selector.z = Setting_UI_InterfaceZ + 120
    Menu_Sprite_Selector.setPosition(14, 30)
    Menu_Sprite_PlayerControlsMenu = sprites.create(assets.image`Menu_SetControlsBackground_0`, SpriteKind.Player)
    Menu_Sprite_PlayerControlsMenu.setFlag(SpriteFlag.RelativeToCamera, true)
    Menu_Sprite_PlayerControlsMenu.z = Setting_UI_InterfaceZ + 90
    Menu_Sprite_PlayerControlsScheme = sprites.create(assets.image`Menu_ControlsScheme_1`, SpriteKind.Player)
    Menu_Sprite_PlayerControlsScheme.setFlag(SpriteFlag.RelativeToCamera, true)
    Menu_Sprite_PlayerControlsScheme.z = Setting_UI_InterfaceZ + 100
    Menu_Sprite_PlayerControlsScheme.x += 8
    Menu_ChangeControls = miniMenu.createMenu(
    miniMenu.createMenuItem("x/z"),
    miniMenu.createMenuItem("z/x"),
    miniMenu.createMenuItem("Space"),
    miniMenu.createMenuItem("J/k"),
    miniMenu.createMenuItem("K/J")
    )
    Menu_ChangeControls.setButtonEventsEnabled(true)
    Menu_ChangeControls.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.IconOnly, 0)
    Menu_ChangeControls.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Background, 0)
    Menu_ChangeControls.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.BorderColor, 0)
    Menu_ChangeControls.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Padding, 0)
    Menu_ChangeControls.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Padding, 3)
    Menu_ChangeControls.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
    Menu_ChangeControls.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 5)
    Menu_ChangeControls.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 9)
    Menu_ChangeControls.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 8)
    Menu_ChangeControls.setFlag(SpriteFlag.RelativeToCamera, true)
    Menu_ChangeControls.setPosition(36, 58)
    Menu_ChangeControls.z = Setting_UI_InterfaceZ + 110
    Interact_ControlControlsMenu2()
}
function Play_Teleport () {
    timer.background(function () {
        music.stopAllSounds()
        _Pitch = 5000
        _Volume = 255
        for (let index = 0; index < 8; index++) {
            music.play(music.createSoundEffect(
            WaveShape.Sine,
            1,
            _Pitch,
            _Volume,
            0,
            100,
            SoundExpressionEffect.None,
            InterpolationCurve.Linear
            ), music.PlaybackMode.UntilDone)
            _Pitch += -5000 / 8
            _Volume += -255 / 8
        }
    })
}
function Player_CreateJumpController () {
    Player_Sprite_JumpController = sprites.create(assets.image`JumpController`, SpriteKind.Dummy)
    spriteTileMaps.setTileMapForSprite(Player_Sprite_JumpController, tilemap`level1`)
    tiles.placeOnTile(Player_Sprite_JumpController, tiles.getTileLocation(1, 6))
    Player_Sprite_JumpController.ay = Setting_Player_JumpAcceleration
    Player_Sprite_JumpController.setFlag(SpriteFlag.Invisible, true)
    Player_hasJustJumped = false
    Player_LastJumped = game.runtime() - 10000
}
function Level_CreateMoneys () {
    for (let index = 0; index < 15; index++) {
        Pickup_Sprite_Money = sprites.create(assets.image`Money_0`, SpriteKind.Food)
        sprites.setDataNumber(Pickup_Sprite_Money, "moneyPoints", 150)
        tiles.placeOnRandomTile(Pickup_Sprite_Money, assets.tile`transparency16`)
        tiles.setTileAt(Pickup_Sprite_Money.tilemapLocation(), assets.tile`transparency16`)
        Pickup_Sprite_Money.z = Pickup_Sprite_Money.y + 6
    }
}
function Play_Menu_Select () {
    music.play(music.createSoundEffect(
    WaveShape.Square,
    584,
    5000,
    Setting_Sound_EffectsVolume / 0.75,
    0,
    100,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.InBackground)
}
function NormalizeX (_x: number, _y: number) {
    if (_x != 0) {
        return _x / Math_Vector2Magnitude(_x, _y)
    } else {
        return 0
    }
}
function Game_CreateEffects () {
    Effect_Level_Teleporter = extraEffects.createCustomSpreadEffectData(
    [
    1,
    1,
    9,
    6
    ],
    false,
    extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Twinkle),
    extraEffects.createPercentageRange(3, 100),
    extraEffects.createPercentageRange(0, 0),
    extraEffects.createTimeRange(100, 300),
    0,
    0,
    extraEffects.createPercentageRange(80, 100),
    -1000,
    3,
    5000
    )
    Effect_Level_Teleporter.setSpreadEffectDataSizeLookupTable([
    1,
    2,
    2,
    1,
    1
    ])
    Effect_Level_PlayerTeleport = extraEffects.createCustomSpreadEffectData(
    [
    1,
    1,
    9,
    6
    ],
    false,
    extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Spark),
    extraEffects.createPercentageRange(3, 100),
    extraEffects.createPercentageRange(0, 0),
    extraEffects.createTimeRange(1000, 2000),
    0,
    0,
    extraEffects.createPercentageRange(80, 100),
    -1000,
    20,
    5000
    )
    Effect_Level_PlayerTeleport.setSpreadEffectDataSizeLookupTable([
    1,
    2,
    2,
    1,
    1
    ])
    Effect_Level_PlayerTeleportFront = extraEffects.createCustomSpreadEffectData(
    [
    1,
    1,
    9,
    6
    ],
    false,
    extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Spark),
    extraEffects.createPercentageRange(3, 100),
    extraEffects.createPercentageRange(0, 0),
    extraEffects.createTimeRange(1000, 2000),
    0,
    0,
    extraEffects.createPercentageRange(80, 100),
    -1000,
    20,
    5000
    )
    Effect_Level_PlayerTeleportFront.setSpreadEffectDataSizeLookupTable([
    1,
    2,
    2,
    1,
    1
    ])
    Effect_Level_PlayerTeleportFront.z = 500
    Effect_Level_TeleportExplosion = extraEffects.createCustomSpreadEffectData(
    [
    1,
    1,
    11,
    12
    ],
    false,
    extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Spark),
    extraEffects.createPercentageRange(100, 200),
    extraEffects.createPercentageRange(100, 300),
    extraEffects.createTimeRange(200, 500),
    0,
    100,
    extraEffects.createPercentageRange(80, 100),
    -100,
    0,
    100
    )
    Effect_Enemy_SlimeDamaged = extraEffects.createCustomSpreadEffectData(
    [9, 8],
    true,
    extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Explosion),
    extraEffects.createPercentageRange(0, 100),
    extraEffects.createPercentageRange(100, 600),
    extraEffects.createTimeRange(200, 500),
    0,
    -100,
    extraEffects.createPercentageRange(30, 100),
    500,
    0,
    5000
    )
    Effect_Enemy_SlimeDeath = extraEffects.createCustomSpreadEffectData(
    [13, 1],
    false,
    extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Cloud),
    extraEffects.createPercentageRange(0, 100),
    extraEffects.createPercentageRange(0, 500),
    extraEffects.createTimeRange(200, 500),
    0,
    0,
    extraEffects.createPercentageRange(50, 100),
    -100,
    0,
    5000
    )
}
function UI_CreateUserInterface () {
    UI_CreateButtons()
    UI_CreateButtonIcons()
    UI_CreateHealth()
    UI_CreateWeapon()
}
function Player_UpdateVisuals () {
    Player_ShadowVisuals()
    Player_PlayerVisuals()
    Player_Sprite_PickupBox.setPosition(Player_Sprite_MoveController.x, Player_Sprite_MoveController.y)
}
let _Volume = 0
let _Pitch = 0
let Player_Sprite_PickupBox: Sprite = null
let Player_isInvulnerable = false
let Player_LastStep = 0
let Setting_Player_AnimationWalkSpeed = 0
let Level_Sprite_TeleporterTop: Sprite = null
let UI_isButtonBShaking = false
let UI_LastButtonBShake = 0
let Setting_Sound_MusicVolume = 0
let Setting_Player_MaxVelocity = 0
let Setting_Player_RunSpeedMultiplier = 0
let Setting_Player_VisualJumpMultiplier = 0
let UI_Sprite_ShieldIcon: Sprite = null
let UI_Sprite_HealthFrame: Sprite = null
let Player_isCameraFrozen = false
let Effect_Enemy_SlimeDeath: SpreadEffectData = null
let Effect_Enemy_SlimeDamaged: SpreadEffectData = null
let _radians = 0
let Player_isStopping = false
let Setting_Player_StoppingThreshold = 0
let Player_LastVelocity = 0
let Game_CurrentControlScheme = 0
let UI_Sprite_ButtonIconB: Sprite = null
let UI_Sprite_ButtonIconA: Sprite = null
let UI_isButtonAShaking = false
let UI_LastButtonAShake = 0
let Setting_Player_WalkSpeed = 0
let UI_Sprite_ButtonFrame: Sprite = null
let UI_Sprite_HealthBar: StatusBarSprite = null
let Level_Pickup: Sprite = null
let Player_LastAttacked = 0
let Control_isControllerLocked = false
let Control_LastPressedDirectionButton = 0
let Enemy_Slime: Sprite = null
let Setting_Weapon_ReloadSpeed_Burst = 0
let Level_Wall: Sprite = null
let Menu_PlayerChangeBackground: Sprite = null
let Effect_Level_TeleportExplosion: SpreadEffectData = null
let Effect_Level_PlayerTeleportFront: SpreadEffectData = null
let Effect_Level_PlayerTeleport: SpreadEffectData = null
let Player_CameraOffsetY = 0
let Player_CameraOffsetX = 0
let Menu_PlayerChange: miniMenu.MenuSprite = null
let _WhatDistance = 0
let _WhoisClosest = 0
let Setting_Weapon_Firerate_Burst = 0
let Setting_Weapon_Damage_Burst = 0
let Setting_Weapon_Inaccuracy_Burst = 0
let Setting_Weapon_BulletVelocity_Burst = 0
let Setting_Weapon_Clipsize_Burst = 0
let Weapon_Sprite_Bullet: Sprite = null
let Level_Sprite_Computer: Sprite = null
let Effect_Level_Teleporter: SpreadEffectData = null
let Level_Sprite_Teleporter: Sprite = null
let Level_Sprite_Wizard: Sprite = null
let Level_Sprite_PlayerChange: Sprite = null
let Player_Sprite_VisualsInteract: Sprite = null
let UI_Sprite_AmmoCount: TextSprite = null
let UI_Sprite_CurrentWeapon: Sprite = null
let UI_Sprite_WeaponFrame: Sprite = null
let Player_CurrentAmmo = 0
let Player_isMale = false
let Player_Sprite_VisualsHelmet: Sprite = null
let Player_hasHelmet = false
let Setting_Weapon_ReloadWait_Burst = 0
let Setting_Weapon_Firerate_Peashooter = 0
let Game_isPlaying = false
let UI_Sprite_GameStart: Sprite = null
let Game_EnemiesDefeated = 0
let Player_CurrentWeapon = 0
let Player_Sprite_VisualsPlayer: Sprite = null
let Setting_Player_AirAccelMultiplier = 0
let Setting_Player_GroundAcceleration = 0
let Player_TargetSpeed = 0
let Setting_Weapon_ReloadSpeed_Peashooter = 0
let Weapon_LastReload = 0
let Setting_Player_JumpAcceleration = 0
let Setting_Player_FallAcceleration = 0
let Setting_Player_FallThreshold = 0
let Game_isTeleporting = false
let Setting_Player_JumpVelocity = 0
let Player_LastJumped = 0
let Setting_Controller_InputBufferLength = 0
let Player_isFootOut = false
let Player_isFootRight = false
let Player_hasJustJumped = false
let Pickup_Sprite_Money: Sprite = null
let Setting_Enemy_SlimeHealth = 0
let Setting_Enemy_SlimeJumpMoveSpeed = 0
let Setting_Enemy_SlimeJumpDelay = 0
let Setting_Enemy_DespawnOffset = 0
let Setting_Enemy_SpawnHorizontalOffset = 0
let Setting_Enemy_SpawnVerticalOffset = 0
let Menu_Sprite_PlayerControlsMenu: Sprite = null
let Menu_Sprite_Selector: Sprite = null
let Menu_Sprite_PlayerControlsScheme: Sprite = null
let Menu_ChangeControls: miniMenu.MenuSprite = null
let Intro_Logo2: Sprite = null
let Intro_Logo: Sprite = null
let Intro_Bird: Sprite = null
let Intro_Background: Sprite = null
let mySprite: Sprite = null
let Player_CurrentInteractState = 0
let UI_Sprite_ButtonA: Sprite = null
let Control_LastPressedButtonA = 0
let Level_Sprite_Ship: Sprite = null
let Setting_Weapon_BulletLateralOffset = 0
let Setting_Interact_MaxDistance = 0
let Setting_Player_InvinvibilityFramesLength = 0
let Setting_Weapon_ReloadWait_Peashooter = 0
let Setting_Game_3248VerticalOffset = 0
let Setting_Weapon_BulletHeightOffset = 0
let Setting_Weapon_BulletHitboxSize = 0
let Setting_Enemy_SlimeHitboxScale = 0
let Setting_Sound_SmallEffectsMultiplier = 0
let Weapon_LastAttack = 0
let Setting_Weapon_Damage_Peashooter = 0
let Setting_Weapon_Inaccuracy_Peashooter = 0
let Setting_Weapon_BulletVelocity_Peashooter = 0
let Control_JustPressedButtonA = false
let Setting_Weapon_ClipSize_Peashooter = 0
let UI_Sprite_AmmoBar: StatusBarSprite = null
let Player_Sprite_VisualsShadow: Sprite = null
let Player_Sprite_JumpController: Sprite = null
let UI_Sprite_ButtonB: Sprite = null
let Control_LastPressedButtonB = 0
let Player_isLocked = false
let Game_doesPlayerExist = false
let Setting_UI_ButtonIconShakeDuration = 0
let Setting_UI_InterfaceZ = 0
let Setting_Player_CameraResetDelay = 0
let Setting_Player_MovingCameraSpeed = 0
let Setting_Player_MovingCameraOffset = 0
let Setting_Camera_ScrenshakeIntensity = 0
let Player_CurrentDirection = 0
let Player_CurrentState = 0
let Player_Sprite_MoveController: Sprite = null
let Setting_Sound_EffectsVolume = 0
Settings_Sound()
if (blockSettings.exists("ControlScheme")) {
    Game_SetControls(blockSettings.readNumber("ControlScheme"))
    WhiskyjackIntro()
} else {
    Interact_ChangeControlsMenu2()
}
game.onUpdate(function () {
    if (Game_doesPlayerExist) {
        Player_UpdateJumping()
        Player_UpdateMovement()
        Player_UpdateState()
        Interact_UpdateInteractState()
        Player_UpdateVisuals()
        UpdateCamera()
        Enemy_UpdateEnemyMovement()
        Enemy_UpdateEnemyCollision()
        Enemy_UpdateEnemyDespawns()
        UI_UpdateUserInterface()
        Weapon_UpdateProjectileCollision()
        Weapon_UpdateAmmo()
        Weapon_UpdateProjectileZ()
        Weapon_Shoot()
        UI_UpdateWeapon()
    }
})
game.onUpdateInterval(1000, function () {
    if (Game_isPlaying) {
        SpawnSlime()
        if (Game_EnemiesDefeated >= 20) {
            SpawnSlime()
        }
        if (Game_EnemiesDefeated >= 60) {
            SpawnSlime()
        }
        if (Game_EnemiesDefeated >= 90) {
            SpawnSlime()
        }
    }
})
