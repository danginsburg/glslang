#version 120

float lowp;
float mediump;
float highp;

float precision;

in vec4 i;
out vec4 o;

uniform sampler2D s2D;
centroid varying vec2 centTexCoord;

uniform mat4x2 m;

struct s {
    float f;
};

void main()
{
    mat2x3 m23 = mat2x3(m);

    int a;
    bool b;
    s sv = s(a);
    float[2] ia = float[2](3, i.y);
    float f1 = 1;
    float f = a;
    f = a;
    ivec3 iv3;
    vec3 v3 = iv3;
    f = f + a;
    f = a - f;
    f += a;
    f = a - f;
    v3 *= iv3;
    v3 = iv3 / 2.0;
    v3 = 3.0 * iv3;
    v3 = 2 * v3;
    v3 = v3 - 2;
    if (f <  a ||
        a <= f ||
        f >  a ||
        f >= a ||
        a == f ||
        f != a);
    f = b ? a : f;
    f = b ? f : a;
    f = b ? a : a;
    s news = sv;
    
    i.xy + i.xyz;      // ERROR
    m * i.xyz;         // ERROR
    m + i;             // ERROR
    int aoeu = 1.0;    // ERROR
    f = b;             // ERROR
    f = a + b;         // ERROR
    f = b * a;         // ERROR
    b = a;             // ERROR
    b = b + f;         // ERROR
    f |= b;            // ERROR

    gl_FragColor = texture2D(s2D, centTexCoord);
}
